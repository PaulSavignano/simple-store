import React from 'react'
import { Row, Col } from 'react-bootstrap'
import StoreProducts from '../containers/store-products'

export const StoreProductsPage = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Products</h4>
      <StoreProducts />
    </Col>
  </Row>
)
