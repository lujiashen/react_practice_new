import React, { Component } from 'react';
import Select from "./city_selector/view"
import Weather from "./weather/view"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Select />
          <Weather />
      </div>
    );
  }
}

export default App;
