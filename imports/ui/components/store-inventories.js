import React from 'react'
import { ListGroup, Alert } from 'react-bootstrap'
import { StoreInventory } from './store-inventory'

export const StoreInventories = ({ products }) => (
  products.length > 0 ?
  <ListGroup>
    {products.map((product) => (
      <StoreInventory key={ product._id } product={ product } />
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No products yet.</Alert>
)
