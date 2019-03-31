import { Link, BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import React, { Component } from 'react';

/**
 * 路由传参
 */

class Demo2 extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>Acount</h2>
                   <Link to="/react">React</Link> 
                   <Link to="/vue">Vue</Link> 
                   <Link to="/javascript">Javascript</Link> 
                   <Link to="/html">Html</Link> 
                </div>
                <Route path="/:id" component={Child} />
            </Router>
        )
    }
}

const Child = ({match}) => {
    return <h2>{match.params.id}</h2>
}

export default Demo2;