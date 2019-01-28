import React, { Component } from "react";

import Theme from "./containers/theme";
import LayoutListRegions from "./components/layoutListRegions";

import Header from "./components/header";
import Provider from "./providers";
import CoinbaseProductsQuery from "./providers/coinbase/productStats";

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
