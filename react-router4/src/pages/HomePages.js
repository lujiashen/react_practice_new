import React from 'react';
import {logout} from "../utils/xhr"

const HomePages = ({history}) => {
    return (
        <div>
            <h1>App Home Page</h1>
            <button onClick={() => {
                logout().then(() => {
                    history.push('/');
                })
            }}>Logout</button>
        </div>
    )
}


export default HomePages;