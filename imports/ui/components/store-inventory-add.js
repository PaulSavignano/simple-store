import React, { Component } from 'react';
import { FormGroup, FormControl, Image, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { insertProduct } from '../../api/products/methods.js';

const style = {
  border: "1px solid black",
}

const handleInsertProduct = (event) => {
  event.preventDefault()
  const form = document.querySelector('[name="product-insert"]')
  const name = form.querySelector('[name="name"]').value
  const price = form.querySelector('[name="price"]').value
  const description = form.querySelector('[name="description"]').value
  const image = document.getElementById('canvas').toDataURL('image/jpg')
  insertProduct.call({
    name,
    price,
    description,
    image,
  }, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger')
    } else {
      Bert.alert('Product added!', 'success')
    }
  })
}

const handleImageChange = (event) => {
  event.preventDefault()
  const MAX_WIDTH = 150
  const MAX_HEIGHT = 150
  const file = event.target.files[0]
  const image = new window.Image()
  const reader = new FileReader()
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  reader.onload = (e) => {
    image.src = e.target.result
    let width = image.width
    let height = image.height
    if (width > height) {
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width
        width = MAX_WIDTH
      }
    } else {
      if (height > MAX_HEIGHT) {
        width *= MAX_HEIGHT / height
        height = MAX_HEIGHT
      }
    }
    canvas.width = width
    canvas.height = height
    ctx.drawImage(image, 0, 0, width, height)
  }
  reader.readAsDataURL(file)
}

export const StoreInventoryAdd = () => {
  return (
    <form onSubmit={ handleInsertProduct } name="product-insert">
      <div className="row">
        <div className="col-sm-6">
          <canvas id="canvas" width="150" height="150" style={ style }>
          </canvas>
          <FormControl type="file" onChange={ handleImageChange } />
        </div>
        <div className="col-sm-6">
          <div className="card card-block">
            <FormGroup>
              <FormControl
                name="name"
                type="text"
                placeholder="Product Name"
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                name="price"
                type="text"
                placeholder="Product Price"
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                name="description"
                componentClass="textarea"
                placeholder="The description of the product."
              />
            </FormGroup>
            <Button type="submit" bsStyle="success" className="pull-right">Add</Button>
          </div>
        </div>
      </div>
    </form>
  )
}
