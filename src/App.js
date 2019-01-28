import React, { Component } from "react";

import Theme from "./containers/theme";
import Provider from "./providers";

import Home from "./containers/home";

class App extends Component {
  render() {
    return (
      <Provider>
        <Theme>
          <Home />
        </Theme>
      </Provider>
    );
  }
}

export default App;
