import React from 'react';
import {NavLink,withRouter} from "react-router-dom"

const UserNav = ({match}) => {
    return (
    <div>
        <NavLink to={`${match.path}`}>Browse</NavLink>
        <NavLink to={`${match.path}/add`}>Add</NavLink>
    </div>
    )
}

export default withRouter(UserNav);