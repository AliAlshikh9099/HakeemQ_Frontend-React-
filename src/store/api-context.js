import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const ApiContext = React.createContext({
    isLoading: false,
    error: null,
    sendRequest: ({ url, method, data, headers }) => {}
})

export const ApiContextProvider = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async ({ url, method = 'GET', data = null, headers = {} }) => {
        setIsLoading(true);
        setError(null)
        try {
            const response = await axios({
                url: url,
                method: method,
                headers: headers,
                data: data
            })
            const responseData = response.data;
            setIsLoading(false);
            return responseData;
        }
        catch (error) {
            setIsLoading(false);
            setError(error.message);
            throw error;
        }
    }

    const apiContextValue = {
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest,
    }

    return <ApiContext.Provider value={apiContextValue}>{props.children}</ApiContext.Provider>
};

export default ApiContext;