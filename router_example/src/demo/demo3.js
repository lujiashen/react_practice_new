import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect, withRouter } from "react-router-dom"

const utils = {
    isLogin: false,
    login(cb) {
        this.isLogin = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        this.isLogin = false;
        setTimeout(cb, 100);
    }
}

const AuthExample = () => {
    return (
        <Router>
            <AuthButton />
            <ul>
                <li><Link to="/public">Public</Link></li>
                <li><Link to="/protected">Protected</Link></li>
            </ul>
            <Route path="/public" component={Public} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/protected" component={Protected} />
        </Router>
    )
}

const AuthButton = withRouter(({ history }) => {
    if (utils.isLogin) {
        return (<div>
            <p>Welcome</p>
            <button onClick={
                () => {
                    utils.signout(() => history.push("/"));
                }
            }>sign out</button>
        </div>);
    } else {
        return <div>You are not logged in.</div>
    }
})

const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log({...rest});
    return (
        <Route
            {...rest}
            render={props =>{
                console.log(props);
                return utils.isLogin ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
                }
            }
        />
    )
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        }
    }
    login = () => {
        utils.login(() => {
            this.setState({
                redirectToReferrer: true
            })
        });
    }
    render() {
        if (this.state.redirectToReferrer) {
            return <Redirect to={this.props.location.state.from} />
        }
        return (
            <div>
                <p>You must log in to view the page at /protected</p>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

const Public = () => {
    return <div>Public</div>
}

const Protected = () => {
    return <div>Protected</div>
}


export default AuthExample;

