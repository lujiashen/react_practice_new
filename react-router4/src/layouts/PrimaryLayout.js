import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom"
import PrimaryHeader from "../ui/PrimaryHeader"
import HomePages from "../pages/HomePages"
import UserSubLayout from './UserSubLayout'
import ProductSubLayout from './ProductSubLayout'

const PrimaryLayout = ({ match }) => {
    console.log(match);
    return (
        <div>
            <PrimaryHeader />
            <Switch>
                <Route path={`${match.path}`} exact component={HomePages} />
                <Route path={`${match.path}/users`} component={UserSubLayout} />
                <Route path={`${match.path}/products`} component={ProductSubLayout} />
                <Redirect to={`${match.url}`} />
            </Switch>
        </div>
    )
}

  export default PrimaryLayout;