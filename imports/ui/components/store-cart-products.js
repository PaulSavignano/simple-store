import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap'
import { StoreCartProduct } from './store-cart-product'

export const StoreCartProducts = ({ cartProducts }) => (
  cartProducts.length > 0 ? cartProducts.map((cartProduct) => (
      <StoreCartProduct key={ cartProduct._id } cartProduct={ cartProduct } />
    )) :
  <Alert bsStyle="warning">Nothing in your cart yet.</Alert>
)
