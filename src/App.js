import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from "./components/routes/Error";
import About from "./components/routes/About";
import Navigation from "./components/layouts/Navigation";
import Product from "./components/routes/Product";
import Products from "./components/routes/Products";
import Home from "./components/routes/Home";
import Data from "./data.json";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { allGalleryItems: Data }
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navigation />
          <Switch>
            <Route path="/" render={(props) => <Home {...props} slideGalleryItems={this.state.allGalleryItems} />} exact />
            <Route path="/products" render={(props) => <Products {...props} allProducts={this.state.allGalleryItems} />} exact />
            <Route path="/products/:productID" render={(props) => <Product {...props} galleryItems={this.state.allGalleryItems} exact />} />
            <Route path="/about" render={About} exact />
            <Route render={Error} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
