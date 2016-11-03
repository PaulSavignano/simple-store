import React from 'react'
import { Bert } from 'meteor/themeteorchef:bert'
import { formatPrice } from '../../modules/store-helpers'

const handleRemoveCartItem = () => {
  event.preventDefault();
}

export const StoreCartProduct = ({ item }) => (
  <tr>
    <td className="col-sm-8 col-md-6">
      <div className="media">
        <a className="thumbnail pull-left" href="#">
          <img className="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" style="width: 72px; height: 72px;"/>
        </a>
        <div className="media-body">
          <h4 className="media-heading"><a href="#">Product name</a></h4>
          <h5 className="media-heading"> by <a href="#">Brand name</a></h5>
          <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
        </div>
      </div></td>
    <td className="col-sm-1 col-md-1" style="text-align: center">
      <input type="email" className="form-control" id="exampleInputEmail1" value="3"/>
    </td>
    <td className="col-sm-1 col-md-1 text-center"><strong>$4.87</strong></td>
    <td className="col-sm-1 col-md-1 text-center"><strong>$14.61</strong></td>
    <td className="col-sm-1 col-md-1">
      <button type="button" className="btn btn-danger">
        <span className="glyphicon glyphicon-remove"></span> Remove
      </button>
    </td>
  </tr>
)
