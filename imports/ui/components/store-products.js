import React from 'react'
import { ListGroup, Alert } from 'react-bootstrap'
import { StoreProduct } from './store-product'

export const StoreProducts = ({ products }) => (
  products.length > 0 ?
  <ListGroup>
    {products.map((product) => (
      <StoreProduct key={ product._id } product={ product } />
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No products yet.</Alert>
)
