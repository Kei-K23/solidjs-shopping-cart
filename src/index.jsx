/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import Home from "./routes/Home";
import About from "./routes/About";

import "./index.css";
import RootLayout from "./layouts/RootLayout";

const root = document.getElementById("root");

render(
  () => (
    <Router root={RootLayout}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  ),
  root
);
