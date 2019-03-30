import React, { Component } from 'react';
import {Route,Redirect} from "react-router-dom"
import { connect } from 'react-redux'
import { getLoggedUser } from './utils/xhr'

class AuthorizedRoute extends Component {
    componentWillMount() {
        getLoggedUser();
    }
    render() {
        // console.log(this.props);
        const {pending,logged,component: Component,...rest} = this.props;
        return (
            <Route {...rest} render={props => {
                if(pending) {
                    return <div>Loading...</div>
                }
                return logged?<Component {...props} />:<Redirect to="/auth/login" />
            }} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        logged: state.loggedUserState.logged,
        pending: state.loggedUserState.pending
    }
}

export default connect(mapStateToProps)(AuthorizedRoute);
