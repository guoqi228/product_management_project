import React, { Component } from 'react';

class AddProduct extends Component {

  constructor() {
    super();
    this.state={
      newProduct: ""
    }
  }

  addProduct = e => {
    e.preventDefault();
    this.setState({
      newProduct: {
        id: this.props.generateId,
        title: this.refs.title.value,
        price: parseFloat(this.refs.price.value, 10)
      }
    }, function() {
      this.props.handleAddProduct(this.state.newProduct);
    })
  }

  render() {

    return(
      <div className="AddProduct col-md-3">
       <h3>Welcome to Product Management System</h3>
        <form onSubmit={this.addProduct}>
        <div className="form-group">
          <label> Product Name: </label>
          <input id="name" className="form-control" type="text" placeholder="Name" ref="title"/>
        </div>
        <div className="form-group">
          <label> Product Price: </label>
          <input id="price" className="form-control" type="text" placeholder="Price" ref="price"/>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Add Product"/>
        </div>
        </form>
      </div>

    )
  }
}
export default AddProduct;
