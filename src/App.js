import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Products from './components/products';
import AddProduct from './components/addProduct';
import firebase from './firebase';
//import Animals from './components/animals';

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
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
  }

  componentWillMount() {
    this.setState(
      {name: "Connor",
      occupation: "Instruction",
      searchTerm: "",
      animals: [],
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
    let prodRef = firebase.database().ref('products');
    prodRef.push(this.state.products);
  }

  componentDidMount(){
  this.displayList();
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

  displayList() {
    const prodsRef = firebase.database().ref('products');
    prodsRef.on('value', (snapshot) => {
      let products = snapshot.val();
      let newState = [];
      if (products != null) {
        for (let index in products) {
          newState.push({
            id: products[index].id,
            title: products[index].title,
            price: products[index].price
          });
        }
      }
      this.setState({
        products: newState
      });
    });
  }

  handleAddProduct(product) {
    let current_prods = this.state.products;
    current_prods.push(product);
    this.setState({product: current_prods});
    firebase.database().ref('products').set(current_prods);
    this.displayList();
  }

  handleRemoveProduct(id) {
    let current_prods = this.state.products;
    for (let index in current_prods) {
      if (current_prods[index].id === id) {
        current_prods.splice(index, 1);
      }
    }
    this.setState({products: current_prods});

    firebase.database().ref('products').set(current_prods);
    this.displayList();
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
    //console.log("this.state.animals");
    //console.log(this.state.animals);
    return (
      <div className="App">
        <Header onSearch={this.onSearch} my_name={this.state.name} my_occupation={this.state.occupation} />
        <div className="container">
        <div className="row">
          <AddProduct generateId={this.generateId()} handleAddProduct={this.handleAddProduct} />
          <Products handleRemoveProduct={this.handleRemoveProduct} total={this.getTotal()} term={this.state.searchTerm} isSearched={this.isSearched} items={this.state.products} />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
