import React from 'react'
import { Col, Thumbnail, Button } from 'react-bootstrap'
import { Bert } from 'meteor/themeteorchef:bert'
import { insertProduct } from '../../api/products/methods.js'

const handleInsertProduct = (event) => {
  event.preventDefault()
  const form = document.querySelector('[name="product-form"]')
  const product = {
    name: form.querySelector('[name="name"]'),
    price: form.querySelector('[name="price"]'),
    status: form.querySelector('[name="status"]'),
    desc: form.querySelector('[name="desc"]'),
    image: form.querySelector('[name="image"]'),
  }
  insertProduct.call({
    product,
  }, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      event.target.value = '';
      Bert.alert('Product added!', 'success');
    }
  });
};

export const StoreInventory = ({ product }) => {
  console.log(product)
  return (
    <form name="product-form" className="fish-edit" onSubmit={ handleInsertProduct }>
      <Col xs={ 3 }>
        <Thumbnail src={ product.image }>
        </Thumbnail>
      </Col>
      <Col xs={ 9 }>
        <h3>{ product.name }</h3>
        <p>{ product.description }</p>
        <p className="pull-right">
          <Button bsStyle="success">Update</Button>
          <Button bsStyle="danger">Remove</Button>
        </p>
      </Col>
    </form>
  )
}
