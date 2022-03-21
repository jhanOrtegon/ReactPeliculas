import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../components/login/Login'
import { DashboardRoute } from './DashboardRoute'
import { PrivatesRouter } from './PrivatesRouter'
import { PublicRouter } from './PublicRouter'

export const AppRoute = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <PublicRouter>
                        <Login />
                    </PublicRouter>} exact />

                <Route path='/*' element={
                    <PrivatesRouter>
                        <DashboardRoute />
                    </PrivatesRouter>
                } exact />

            </Routes>
        </BrowserRouter >
    )
}
