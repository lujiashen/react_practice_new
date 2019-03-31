import { Link, BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import React, { Component } from 'react';

/**
 * 模糊匹配
 */


class Demo6 extends Component {
    render() {
        return (
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/kim">Kim</Link></li>
                    <li><Link to="/chris">Chris</Link></li>
                </ul>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/:user" component={User} />
                </Switch>
            </Router>
        )
    }
}

function Home() {
    return <div>Home</div>
}

function About() {
    return <div>About</div>
}

const User = ({ match }) => {
    return <div>name:{match.params.user}</div>
}

export default Demo6;