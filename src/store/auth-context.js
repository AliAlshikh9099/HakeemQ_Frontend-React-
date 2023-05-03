import React, { useState } from "react";

const AuthContext = React.createContext({
    token: null,
    register: (token) => {},
    login: (token) => {},
    logout: () => {},
    isAuth: false,
})

export const AuthContextProvider = props => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    
    const doctorIsAuthenticated = !!token;

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    }

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    }
    
    const registerHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    }
    const contextValue = {
        token: token,
        register: registerHandler,
        login: loginHandler,
        logout: logoutHandler,
        isAuth: doctorIsAuthenticated
    }
    return (
        <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext;