import React, { Component } from "react";
import Theme from "./components/theme";

import Header from "./components/header";
import Provider from "./provider";
import CoinbaseProductsQuery from "./provider/coinbase/productStats";

class App extends Component {
  render() {
    return (
      <Theme>
        <Provider>
          <div>
            <Header />
          </div>
          <CoinbaseProductsQuery />
        </Provider>
      </Theme>
    );
  }
}

export default App;
