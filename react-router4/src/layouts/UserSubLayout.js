import React from 'react';
import UserNav from "../ui/UserNav"
import {Switch,Route,withRouter} from "react-router-dom"
import BrowseUsersPage from "../pages/BrowseUsersPage"
import AddUserPage from "../pages/AddUserPage"
import UserProfilePage from "../pages/UserProfilePage"

const UserSubLayout = ({match}) => {
    return (
        <div>
            <aside>
                <UserNav />
            </aside>

            <Switch>
                <Route path={match.path} exact component={BrowseUsersPage} />
                <Route path={`${match.path}/add`} exact component={AddUserPage} />
                <Route path={`${match.path}/:userId`} component={UserProfilePage} /> 
            </Switch>
        </div>
    )
}


export default withRouter(UserSubLayout);