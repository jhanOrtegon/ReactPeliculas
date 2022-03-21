import React from 'react'
import { NavLink } from 'react-router-dom'

export const ListSeries = ({ poster_path, name, original_language, overview, id }) => {
    const rutaImg = `https://image.tmdb.org/t/p/w500/${poster_path}
    `
    return (
        <>
            <div className="card col-12 col-sm-3 col-md-5 col-lg-2 my-2 p-0 animate__animated animate__fadeIn">
                <img src={rutaImg} alt={name} className='w-100 card-img-top' height='350px' />
                <div className="card-body text-center p-0 mt-2 d-flex flex-column align-items-center">
                    <h5 className="card-title mt-2 d-flex align-items-center justify-content-center h-50"  >{name}</h5>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    <NavLink to={`/result/${id}`} className='btn btn-dark btn-lg w-100 h-50 mb-0  d-flex flex-column align-items-center '>Mas Informacion</NavLink>
                </div>
            </div>


        </>
    )
}
