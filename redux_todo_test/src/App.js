import React, { Component } from 'react';
import Todos from "./todos/views/todos"
import Filter from "./filter/views/Filter" 


class App extends Component {
  render() {
    return (
      <div className="App">
        <Todos />
        <Filter />
      </div>
    );
  }
}

export default App;
