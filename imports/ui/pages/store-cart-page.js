import React from 'react';
import { Row, Col } from 'react-bootstrap';
import StoreCartProducts from '../containers/store-cart-products.js';

export const StoreCartPage = () => (
  <Row>
    <div className="col-sm-12 col-md-10 col-md-offset-1">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th className="text-center">Price</th>
            <th className="text-center">Total</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <StoreCartProducts />
          <tr>
            <td>   </td>
            <td>   </td>
            <td>   </td>
            <td><h5>Subtotal</h5></td>
            <td className="text-right"><h5><strong>$24.59</strong></h5></td>
          </tr>
          <tr>
            <td>   </td>
            <td>   </td>
            <td>   </td>
            <td><h5>Estimated shipping</h5></td>
            <td className="text-right"><h5><strong>$6.94</strong></h5></td>
          </tr>
          <tr>
            <td>   </td>
            <td>   </td>
            <td>   </td>
            <td><h3>Total</h3></td>
            <td className="text-right"><h3><strong>$31.53</strong></h3></td>
          </tr>
          <tr>
            <td>   </td>
            <td>   </td>
            <td>   </td>
            <td>
              <button type="button" className="btn btn-default">
                <span className="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
              </button></td>
            <td>
              <button type="button" className="btn btn-success">
                Checkout <span className="glyphicon glyphicon-play"></span>
              </button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </Row>
)
