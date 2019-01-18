import React, { Component } from 'react';
import Header from "./components/header";
import Provider from "./provider";

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Header />
        </div>
      </Provider>
    );
  }
}

export default App;
