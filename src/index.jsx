/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./index.css";
import RootLayout from "./layouts/RootLayout";
import Home from "./routes/Home";
import ShoppingCart from "./routes/ShoppingCart";
import ProductDetail from "./routes/ProductDetail";

const root = document.getElementById("root");

render(
  () => (
    <Router root={RootLayout}>
      <Route path="/" component={Home} />
      <Route path="/product-detail/:id" component={ProductDetail} />
      <Route path="/shopping-cart" component={ShoppingCart} />
    </Router>
  ),
  root
);
