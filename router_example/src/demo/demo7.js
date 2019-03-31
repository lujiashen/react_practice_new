import { Link, BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import React, { Component } from 'react';

const routes = [
    {
        path: "/sandwiches",
        component: SandWiches
    },
    {
        path: "/tacos",
        component: Tacos,
        routes: [{
            path: "/tacos/bus",
            component: Bus
        },{
            path: "/tacos/cart",
            component: Cart
        }]
    }
]
function Tacos({routes}) {
    console.log(routes);
    return (
        <div>
            <h2>tacos</h2>
            <ul>
                <li><Link to="/tacos/bus">bus</Link></li>
                <li><Link to="/tacos/cart">cart</Link></li>
            </ul>
            {
                routes.map((route,index) => {
                   return <RouteWithSubRouters key={index} {...route} />
                })
            }
        </div>
    )
}

function RouteWithSubRouters(route) {
    return (
        <Route path={route.path} render={
            (props) => {
                return <route.component {...props} routes={route.routes} />
            }
        } />
    )
}

class Demo7 extends Component {
    render() {
        return (
            <Router>
                <ul>
                    <li><Link to="/sandwiches">sandwiches</Link></li>
                    <li><Link to="/tacos">tacos</Link></li>
                </ul>
                {
                    routes.map((route,index) => {
                      return  <RouteWithSubRouters key={index} {...route} />
                    })
                }
            </Router>
        )
    }
}

function SandWiches() {
    return <h2>SandWiches</h2>
}

function Bus() {
    return <h2>Bus</h2>
}

function Cart() {
    return <h2>Cart</h2>
}


export default Demo7;