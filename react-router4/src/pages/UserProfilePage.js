import React from 'react';

const UserProfilePage = ({match}) => {
    return (
        <div>
            <h1>
            UserProfilePage: {match.params.userId}
            </h1>
        </div>
    )
}

export default UserProfilePage;