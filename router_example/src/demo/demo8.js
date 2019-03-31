import { Link, BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import React, { Component } from 'react';

class Demo8 extends Component {
    render() {
        return (
            <Router>
                <Route component={Com} />
            </Router>
        )
    }
}
const Com = ({ location }) => {
    console.log(location);
    let params = new URLSearchParams(location.search);
    return (
    
        <div>
            <h1>Acount</h1>
            <ul>
                <li><Link to={{ pathname: "/acount", search: "?name=react" }}>react</Link></li>
                <li><Link to={{ pathname: "/acount", search: "?name=js" }}>js</Link></li>
                <li><Link to={{ pathname: "/acount", search: "?name=css" }}>css</Link></li>
                <li><Link to={{ pathname: "/acount", search: "?name=html" }}>html</Link></li>
            </ul>
            <Child name={params.get("name")} />
        </div>

    )
}
function Child({ name }) {
    return (
        <div>
            {name ? (
                <h3>
                    The <code>name</code> in the query string is "{name}"
          </h3>
            ) : (
                    <h3>There is no name in the query string</h3>
                )}
        </div>
    );
}

export default Demo8;