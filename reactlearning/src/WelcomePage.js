import { useContext } from "react";
import React, { userContext } from 'react';
import { user } from './Context';

const WelcomePage = () => {
    const { user } = useContext(userContext);

    return (
        <div>
            <h1> Welcome  User:</h1>
            <p>Name: { user.name } Id: {user.id}</p>
        </div>
    )
}

export default WelcomePage;