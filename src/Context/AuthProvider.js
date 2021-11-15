import React, { createContext } from 'react';
import UseFireBase from '../Hook/UseFireBase';

export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const allContext = UseFireBase()
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;