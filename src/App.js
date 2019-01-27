import React, { Component } from "react";

import Theme from "./components/theme";
import LayoutListRegions from "./components/layoutListRegions";

import Header from "./components/header";
import Provider from "./provider";
import CoinbaseProductsQuery from "./provider/coinbase/productStats";

class App extends Component {
  render() {
    return (
      <Provider>
        <Theme>
          <LayoutListRegions>
            <div>
              <Header />
            </div>
            <CoinbaseProductsQuery />
          </LayoutListRegions>
        </Theme>
      </Provider>
    );
  }
}

export default App;
