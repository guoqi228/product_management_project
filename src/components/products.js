import React, { Component } from 'react';
import ProductItem from './productItem'

class Products extends Component {

  render() {
    let items;
    if (this.props.items) {
      items = this.props.items.filter(this.props.isSearched(this.props.term)).map(item => {
        return <ProductItem key={item.id} item={item} handleRemoveProduct={this.props.handleRemoveProduct}/>
      })
    }

    function logState(data) {
      console.log(data);
    }

    return (
      <div className="products col-md-5 offset-md-4">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Option</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
          <tfoot>
          <tr>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">Total: ${this.props.total}</th>
          </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default Products;
