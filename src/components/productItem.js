import React, { Component } from 'react';

class ProductItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    console.log(this.props.item.id)
  }


  render() {
    function twoDecimals(num) {
      return num.toFixed(2);
    }
    return (
      <tr>
        <th scope="row">{this.props.item.id}</th>
        <td>{this.props.item.title}</td>
        <td>${twoDecimals(this.props.item.price)} </td>
        <td><span onClick={()=>{this.props.handleRemoveProduct(this.props.item.id)}} className="btn badge badge-danger">Remove</span></td>
      </tr>
    );
  }
}
export default ProductItem;
