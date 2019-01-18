import React, { Component } from 'react';
import Header from "./components/header";
import Provider from "./provider";
import CoinbaseProductsQuery from "./provider/coinbase/productStats";

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Header />
        </div>
        <CoinbaseProductsQuery />
      </Provider>
    );
  }
}

export default App;
