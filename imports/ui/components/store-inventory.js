import React, { Component } from 'react'
import { StoreAddFish } from './store-add-fish'
import base from '../../modules/store-base'

export class StoreInventory extends Component {
  constructor() {
    super()
    this.renderInventory = this.renderInventory.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      uid: null,
      owner: null,
    }
  }
  handleChange(e, key) {
    e.preventDefault()
    const fish = this.props.fishes[key]
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value,
    }
    this.props.updateFish(key, updatedFish)
  }

  renderInventory(key) {
    const fish = this.props.fishes[key]
    return (
      <div className="fish-edit" key={key}>
        <input
          type="text"
          name="name"
          value={fish.name}
          placeholder="Fish name"
          onChange={(e) => this.handleChange(e, key)}
        />
        <input
          type="text"
          name="price"
          value={fish.price}
          placeholder="Fish price"
          onChange={(e) => this.handleChange(e, key)}
        />
        <select
          type="text"
          name="status"
          value={fish.status}
          placeholder="Fish status"
          onChange={(e) => this.handleChange(e, key)}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          type="text"
          name="desc"
          value={fish.desc}
          placeholder="Fish desc"
          onChange={(e) => this.handleChange(e, key)}
        >

        </textarea>
        <input
          type="text"
          name="image"
          value={fish.image}
          placeholder="Fish image"
          onChange={(e) => this.handleChange(e, key)}
        />
        <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
      </div>
    )
  }
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <StoreAddFish addFish={this.props.addFish }/>
        <button onClick={ this.props.loadSamples }>Load Sample Fishes</button>
      </div>
    )
  }
}

StoreInventory.propTypes = {
  fishes: React.PropTypes.object.isRequired,
  updateFish: React.PropTypes.func.isRequired,
  removeFish: React.PropTypes.func.isRequired,
  addFish: React.PropTypes.func.isRequired,
  loadSamples: React.PropTypes.func.isRequired,
  storeId: React.PropTypes.string.isRequired,
}
