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

    const registerHandler = (drInfo, token) => {
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('name', drInfo.name);
    }

    const loginHandler = (drInfo) => {
        setToken(drInfo.token);
        localStorage.setItem('token', drInfo.token);
        localStorage.setItem('name', drInfo.doctor);
    }

    const logoutHandler = () => {
        setToken(null);
        localStorage.clear();
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