import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from "./HomePage"
import { BrowserRouter, Route } from "react-router-dom";
import Beerlist from "./Beerlist"
import Beerdetail from "./Beerdetail"
import Randombeer from "./Randombeer"

function App() {
  return (
    <div>
     <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/beers" component={Beerlist} />
      <Route exact path="/beers/:id" component={Beerdetail} />
      <Route exact path="/random-beer" component={Randombeer} />

    </BrowserRouter> 
    </div>
  );
}

export default App;
