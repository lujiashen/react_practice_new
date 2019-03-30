import React from 'react';
import { Link } from "react-router-dom"
import { login } from '../utils/xhr';

const LoginPage = ({ history }) => {
    return (
        <div>
            <h1>Login page</h1>
            <p>
                For this example application, we cannot visit <Link to="/app">/app</Link> until we are logged in.
                Clicking the "Login" button will simulate a login by setting Redux state. This example compliments
                the CSS-Tricks article I wrote for React Router 4.
            </p>
            <button onClick={() => {
                login().then(() => {
                    history.push("/app");
                })
            }}>Login</button>
        </div>
    )
}

export default LoginPage;