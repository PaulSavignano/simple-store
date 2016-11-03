import React from 'react';
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { updateProduct, removeProduct } from '../../api/products/methods.js';

const handleAddToCart = (productId, event) => {
  event.preventDefault()
  const form = document.querySelector('[name="add-to-cart-form"]')
  const order = {

  }
}

export const StoreProduct = ({ product }) => {
  return(
    <form name="product-form" className="fish-edit" onSubmit={ handleInsertProduct }>
      <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
          <img src="http://placehold.it/320x150" alt="" />
          <div className="caption">
            <h4 className="pull-right">$94.99</h4>
            <h4><a href="#">Fifth Product</a>
            </h4>
            <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="ratings">
            <p className="pull-right">18 reviews</p>
            <p>
              <span className="glyphicon glyphicon-star"></span>
              <span className="glyphicon glyphicon-star"></span>
              <span className="glyphicon glyphicon-star"></span>
              <span className="glyphicon glyphicon-star"></span>
              <span className="glyphicon glyphicon-star-empty"></span>
            </p>
          </div>
        </div>
      </div>
      <button type="submit">+ Add To Cart</button>
    </form>
  )
}
