import { createContext, useContext } from 'react'

import { auth } from '../services/client'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error('There is not auth provider')
    return context
}

export function AuthProvider ({ children }) {

    const signup = (email, password) => {
       createUserWithEmailAndPassword(auth, email, password)
    }

    return (
        <authContext.Provider value={{ signup }}>
            { children }
        </authContext.Provider>
    )
}