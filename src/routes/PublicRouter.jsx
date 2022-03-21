import { Children, useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../components/auth/authContext"

export const PublicRouter = ({ children }) => {
    const { user } = useContext(AuthContext)

    return (
        user.logged
            ? <Navigate to={'/movies'} />
             : children
    )


}
