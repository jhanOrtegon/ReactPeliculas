import React, { useReducer } from 'react'
import { AuthContext } from './components/auth/authContext'
import { authReducer } from './components/auth/authReducer'
import { AppRoute } from './routes/AppRoute'

const AppNetFlix = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('user')) || {}
    }

    const [user, dispatch] = useReducer(authReducer, {}, init)

    return (
        <>
            <AuthContext.Provider value={{ user, dispatch }}>
                <AppRoute />
            </AuthContext.Provider>
        </>
    )
}

export default AppNetFlix
