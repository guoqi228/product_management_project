import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Products from './components/products';
import AddProduct from './components/addProduct';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      occupation: "",
      products: [],
      searchTerm: ""
    };
    this.onSearch = this.onSearch.bind(this);
    this.isSearched = this.isSearched.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.generateId = this.generateId.bind(this);
  }

  componentWillMount() {
    this.setState(
      {name: "Connor",
      occupation: "Instruction",
      searchTerm: "",
      products: [
          {
            "id": "101",
            "title":"Hand Sanitizer",
            "price":1.99
          },
          {
            "id": "102",
            "title":"Soap",
            "price":2.99
          },
          {
            "id": "103",
            "title":"Pizza",
            "price":3.99
          },
          {
            "id": "104",
            "title":"Burgers",
            "price":4.99
          },
          {
            "id": "105",
            "title":"Milk",
            "price":3.10
          },
          {
            "id": "106",
            "title":"Eggs",
            "price":1.87
          },
          {
            "id": "107",
            "title":"Bread",
            "price":4.56
          },
          {
            "id": "108",
            "title":"Bananas",
            "price":4.59
          }
        ]
    }
    )
  }

  onSearch(e) {
    this.setState(
      {
      searchTerm: e.target.value
    }
  )
    //console.log(this.state.searchTerm);

  }

  isSearched(term) {
    return function(item) {
      return item.title.toLowerCase().includes(term.toLowerCase());
    }
  }
  handleAddProduct(product) {
    let current_prods = this.state.products;
    current_prods.push(product);
    this.setState({product: current_prods});
  }

  generateId() {
    return this.state.products.length + 101;
  }

  getTotal() {
    let total = 0;
    this.state.products.map(item => {
      total += item.price;
    })
    return total.toFixed(2);
  }

  render() {
    return (
      <div className="App">
        <Header onSearch={this.onSearch} my_name={this.state.name} my_occupation={this.state.occupation} />
        <div className="container">
        <div className="row">
          <AddProduct generateId={this.generateId()} handleAddProduct={this.handleAddProduct} />
          <Products total={this.getTotal()} term={this.state.searchTerm} isSearched={this.isSearched} items={this.state.products} />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
