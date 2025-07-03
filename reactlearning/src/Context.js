import React, { Children, createContext } from 'react';
export const UserContext = createContext();

const UserProvider = ({ Children }) => {
    const user = { name: "John Doe", id: 1 };

    return (
        <UserContext.Provider value = {user}>
            {Children}
        </UserContext.Provider>
    );
};

export default UserProvider;