import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductListing from "./pages/product_listing/ProductListing";
import ProductDetail from "./pages/product_detail/ProductDetail";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
import Orders from "./pages/orders/Orders";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route exact path="/products" component={ProductListing} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
