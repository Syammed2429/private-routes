import React from 'react';

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {

    //Hooks 
    const [login, setLogin] = React.useState(false);

    //loginChange
    const handleLoginChange = () => {
        setLogin(prev => !prev)
    }

    return <AuthContext.Provider
        value={{
            login,
            handleLoginChange
        }}>
        {children}
    </AuthContext.Provider>
}
