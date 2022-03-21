import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../components/auth/authContext'

export const PrivatesRouter = ({ children }) => {
    const { user } = useContext(AuthContext)
    return (
        user.logged
            ? children
            : <Navigate to={'/'} />
    )
}
