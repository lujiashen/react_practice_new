import React, { Component } from 'react';
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import MockBrowser from './mock-browser'
import AuthorizedRoute from './AuthorizedRoute'
import store from './store'
import UnauthorizedLayout from './layouts/UnauthorizedLayout'
import PrimaryLayout from './layouts/PrimaryLayout'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <MockBrowser />
            <Switch>
              <Route path="/auth" component={UnauthorizedLayout} />
              <AuthorizedRoute path="/app" component={PrimaryLayout} />
              <Redirect to="/auth" />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
