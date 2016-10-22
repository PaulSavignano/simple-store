import React, { Component } from 'react'
import { StoreAddFish } from './store-add-fish'

export class StoreInventory extends Component {
  render() {
    return (
      <div>
        <h2>StoreInventory</h2>
        <StoreAddFish addFish={this.props.addFish }/>
        <button onClick={ this.props.loadSamples }>Load Sample Fishes</button>
      </div>
    )
  }
}
