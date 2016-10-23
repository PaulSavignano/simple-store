import React, { Component } from 'react'
import { StoreHeader } from '../components/store-header'
import { StoreOrder } from '../components/store-order'
import { StoreInventory } from '../components/store-inventory'
import sampleFishes from '../../modules/store-sample-fishes'
import { StoreProducts } from '../components/store-products'
import base from '../../modules/store-base'

export class StoreProductsPage extends Component {
  constructor() {
    super()
    this.addFish = this.addFish.bind(this)
    this.updateFish = this.updateFish.bind(this)
    this.removeFish = this.removeFish.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    this.addToOrder = this.addToOrder.bind(this)
    this.removeFromOrder = this.removeFromOrder.bind(this)
    this.state = {
      fishes: {},
      order: {},
    }
  }
  componentWillMount() {
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`
      ,{
        context: this,
        state: 'fishes',
      }
    )
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`)
    if(localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef),
      })
    }
  }
  componentWillUnmount() {
    base.removeBinding(this.ref)
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`order-${this.props.params.storeId}`,
    JSON.stringify(nextState.order))
  }
  addFish(fish) {
    const fishes = { ...this.state.fishes }
    const timestamp = Date.now()
    fishes[`fish-${timestamp}`] = fish
    this.setState({ fishes })
  }
  updateFish(key, updatedFish) {
    const fishes = {...this.state.fishes}
    fishes[key] = updatedFish
    this.setState({ fishes })
  }
  removeFish(key) {
    const fishes = {...this.state.fishes}
    fishes[key] = null
    this.setState({ fishes })
  }
  loadSamples() {
    this.setState({
      fishes: sampleFishes,
    })
  }
  addToOrder(key) {
    const order = { ...this.state.order }
    order[key] = order[key] + 1 || 1
    this.setState({ order })
  }
  removeFromOrder(key) {
    const order = {...this.state.order}
    delete order[key]
    this.setState({ order })
  }
  render() {
    return (
      <div>
        <div className="catch-of-the-day">
          <div className="menu">
            <StoreHeader age="5000" cool={ true } tagline="Fresh Seafood Market" />
            {Object
              .keys(this.state.fishes)
              .map((key) => (
                <StoreFish
                  key={key}
                  index={key}
                  details={this.state.fishes[key]}
                  addToOrder={this.addToOrder}
                />)
              )
            }
          </div>
          <StoreOrder
            fishes={this.state.fishes}
            order={this.state.order}
            params={this.props.params}
            removeFromOrder={this.removeFromOrder}
          />
          <StoreInventory
            addFish={ this.addFish }
            updateFish={ this.updateFish }
            removeFish={ this.removeFish }
            loadSamples={ this.loadSamples }
            fishes={ this.state.fishes }
            storeId={ this.props.params.storeId }
          />
        </div>
      </div>
    )
  }
}

StorePage.propTypes = {
  params: React.PropTypes.object.isRequired,
}
