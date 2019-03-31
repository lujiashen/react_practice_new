import { Link, BrowserRouter as Router, Route, Switch, Redirect, Prompt } from "react-router-dom"
import React, { Component } from 'react';

/**
 * 防止转换，比如说填写了一些数据，切到别的页面，有提示
 */

class Demo4 extends Component {
    render() {
        return (
            <Router>
                <ul>
                    <li><Link to="/form">Form</Link></li>
                    <li><Link to="one">One</Link></li>
                    <li><Link to="two">Two</Link></li>
                </ul>
                <Route path="/form" component={Form} />
                <Route path="/one" component={One} />
                <Route path="/two" component={Two} />
            </Router>
        )
    }
}

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBlock: false
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={event => {
                    event.preventDefault();
                    event.target.reset();
                    this.setState({
                        isBlock: false
                    })
                }}>
                    <Prompt when={this.state.isBlock} message={location => {
                       return `Are you want to go to ${location.pathname}`
                    }} />

                    <input type="text" onChange={
                        (e) => {
                            if (e.target.value.length > 0) {
                                this.setState({
                                    isBlock: true
                                })
                            } else {
                                this.setState({
                                    isBlock: false
                                })
                            }
                        }
                    } />

                    <p>
                        <button>Submit to stop blocking</button>
                    </p>

                </form>
            </div>
        )
    }
}

const One = () => {
    return <h1>One</h1>
}

const Two = () => {
    return <h1>Two</h1>
}

export default Demo4;