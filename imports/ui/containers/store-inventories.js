import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { Products } from '../../api/products/products'
import { StoreInventories } from '../components/store-inventories'

export default createContainer(({ params }) => {
  const subscription = Meteor.subscribe('products')
  const loading = !subscription.ready()
  const products = Products.find().fetch()
  return {
    loading,
    products,
  }
}, StoreInventories)
