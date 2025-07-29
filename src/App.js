import React from 'react';
import Header from "./containers/Header"
import ProductListing from "./containers/ProductListing"
import ProductDetail from "./containers/ProductDetail"
import Cart from "./containers/Cart"
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom';
import "./App.css";

const App = () => {
  return (
      <div className="App">
        <BrowserRouter>
        {/* <Router> */}
          <Header/>
          <Routes >
            <Route path="/" exact element={<ProductListing/>}/>
            <Route path="/product/:productId" exact element={<ProductDetail/>} />
            <Route>404 not found !</Route>
            <Route path="/product/:productId/cart" element={<Cart/>} />
          </Routes>
        {/* </Router> */}
        </BrowserRouter>
      </div>
  );
};

export default App;