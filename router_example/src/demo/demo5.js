import { Link, BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import React, { Component } from 'react';


class Demo5 extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/old-match">Old Match,to be redirect</Link></li>
                        <li><Link to="/will-match">Will match</Link></li>
                        <li><Link to="/will-not-match">Will not match</Link></li>
                        <li><Link to="/also-will-not-match">Also will not match</Link></li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Redirect from="/old-match" to="/will-match" />
                    <Route path="/will-match" component={Match} />
                    <Route component={NoMatch} />
                </Switch>

            </Router>
        )
    }
}

const Home = () => {
    return (
        <p>
            A <code>&lt;Switch></code> renders the first child <code>&lt;Route></code>{" "}
            that matches. A <code>&lt;Route></code> with no <code>path</code> always
            matches.
    </p>
    )
}

const Match = () => {
    return (
        <div>Matched</div>
    )
}

const NoMatch = ({ location }) => {
    return (
        <div>No Match for {location.pathname}</div>
    )
}

export default Demo5;