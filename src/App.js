import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsComponent from "./components/ProductsComponent";
import TableComponent from "./components/TableComponent";
import CartComponent from "./components/CartComponent";

class App extends Component {
    state = {
        cart: {
            tableId: '',
            productsID: []
        }
    };
    /*selectCartTable = (id) => {
        this.setState({cart : {
            tableId : id}
        });
        console.log(this.state.cart);
    };*/
    AddProductToCart = (id) => {
        //let productsID = [...this.state.cart.productsID]
        this.state.cart.productsID.push(id);
        /*this.setState({cart: {
            productsID: productsID
            }})*/
        console.log(this.state.cart);
    };
  render() {
      return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="container">
        <TableComponent cart={this.state.cart}></TableComponent>
        <ProductsComponent AddProductToCart={this.AddProductToCart}  cart={this.state.cart}></ProductsComponent>
        <CartComponent cart={this.state.cart}></CartComponent>
      </div>
    </div>
      );
  };
}

export default App;
