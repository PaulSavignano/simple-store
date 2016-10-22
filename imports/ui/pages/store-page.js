import React, { Component } from 'react'
import { StoreHeader } from '../components/store-header'
import { StoreOrder } from '../components/store-order'
import { StoreInventory } from '../components/store-inventory'
import sampleFishes from '../../modules/store-sample-fishes'
import { StoreFish } from '../components/store-fish'
import base from '../../modules/store-base'

export class StorePage extends Component {
  constructor() {
    super()
    this.addFish = this.addFish.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    this.addToOrder = this.addToOrder.bind(this)
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
      })
  }
  componentWillUnmount() {
    base.removeBinding(this.ref)
  }
  addFish(fish) {
    const fishes = { ...this.state.fishes }
    const timestamp = Date.now()
    fishes[`fish-${timestamp}`] = fish
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
          />
          <StoreInventory
            addFish={ this.addFish }
            loadSamples={ this.loadSamples }
          />
        </div>
      </div>
    )
  }
}
