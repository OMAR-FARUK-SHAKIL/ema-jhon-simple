/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './App.css';
import Headers from './components/Header/Header';
import Shop from "./components/Shop/Shop";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Headers></Headers>
      <Router>
        <Switch>
          <Route  path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:ProductKey">
            <ProductDetails></ProductDetails>
          </Route>
          {/* * dile onnogula kaj korbena. tai * sobar seshe. */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
