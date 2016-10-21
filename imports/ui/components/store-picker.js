import React, { Component } from 'react'
import { getFunName } from '../../modules/store-helpers'
import { browserHistory } from 'react-router'

export class StorePicker extends Component {
  goToStore(event) {
    event.preventDefault()
    console.log('You changed the URL')
    console.log(this.storeInput)
    const storeId = this.storeInput.value
    console.log(storeId)
    browserHistory.push(`/store/${storeId}`)
  }
  render() {
    return (
      <form onSubmit={ (e) => this.goToStore(e) } className="store-selector">
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={ getFunName() }
          ref={ (input) => { this.storeInput = input }}
        />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}
