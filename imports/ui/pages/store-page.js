import React, { Component } from 'react'
import { StoreHeader } from '../components/store-header'
import { StoreOrder } from '../components/store-order'
import { StoreInventory } from '../components/store-inventory'


export class StorePage extends Component {
  render() {
    return (
      <div>
        <div className="catch-of-the-day">
          <div className="menu">
            <StoreHeader age="5000" cool={ true } tagline="Fresh Seafood Market" />
          </div>
          <StoreOrder />
          <StoreInventory />
        </div>
      </div>
    )
  }
}
