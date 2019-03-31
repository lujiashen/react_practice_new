import { Link, BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import React, { Component } from 'react';

class Demo1 extends Component {
    render() {
        return (
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>
                <hr />
                <div>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/topics" component={Topics} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

const Home = () => {
    return <h1>Home</h1>
}

const About = () => {
    return <h1>About</h1>
}

const Topics = ({match}) => {
    return (
        <div>
            <h1>Topics</h1>
            <ul>
                <li><Link to={`${match.url}/rendering`}>Rendering React</Link></li>
                <li><Link to={`${match.url}/components`}>Components</Link></li>
                <li><Link to={`${match.url}/props-state`}>Props and State</Link></li>
            </ul>
            <Route path="/topics/:id" component={Topic} />
            <Route exact path={`${match.url}`} render={
                () => {
                    return <h3>Please select a topic!</h3>   
                }
            } />
        </div>
    )
}

const Topic = ({match}) => {
    return (
        <h3>{match.params.id}</h3>
    )
}

export default Demo1;