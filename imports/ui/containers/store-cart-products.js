import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { Carts } from '../../api/carts/carts'
import { StoreCartProducts } from '../components/store-cart-products'

export default createContainer(({ params }) => {
  const subscription = Meteor.subscribe('carts')
  const loading = !subscription.ready()
  const carts = Carts.find().fetch()
  return {
    loading,
    carts,
  }
}, StoreCartProducts)
