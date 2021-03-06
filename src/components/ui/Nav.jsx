import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { types } from '../../types/types';
import { AuthContext } from '../auth/authContext';

export const Nav = () => {

    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch({
            type: types.logout,
        });

        navigate('/', { replace: true })
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">

                    <NavLink to='/movies' className='navbar-brand'>
                        Navbar
                    </NavLink>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">

                            <NavLink to='/movies' className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')}>
                                Movies
                            </NavLink>

                            <NavLink to='/series' className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')}>
                                Series
                            </NavLink>

                            <NavLink to='/search' className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')}>
                                Search
                            </NavLink>

                        </div>

                        <div className="navRight text-white d-flex align-items-center gap-4 ms-auto">
                            <p className='m-0'>{user.usuario}</p>
                            <button
                                onClick={handleLogout}
                                className='btn btn-danger'>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
