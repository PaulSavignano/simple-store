import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { StoreInventoryAdd } from '../components/store-inventory-add'
import StoreInventories from '../containers/store-inventories'

export const StoreInventoryPage = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Products Inventory</h4>
      <StoreInventoryAdd />
      <StoreInventories />
    </Col>
  </Row>
)
