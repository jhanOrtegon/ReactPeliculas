import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
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
                    </div>
                </div>
            </nav>
        </>
    )
}
