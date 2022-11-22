import React, { createContext } from 'react'
import { useContext } from 'react'
import { loginGoogle } from '../services/client'

export const authContext = createContext()

export const useAuthContext = () => {
    const context = useContext(authContext)
    return context
}

export const AuthContext = ({ children }) => {
    return <>
        <authContext.Provider value={{loginGoogle}}>
            { children }
        </authContext.Provider>
    </>
}