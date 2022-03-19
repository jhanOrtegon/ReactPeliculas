import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../components/login/Login'
import { DashboardRoute } from './DashboardRoute'

export const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} exact />
                <Route path='/*' element={<DashboardRoute />} exact />
            </Routes>
        </BrowserRouter >
    )
}
