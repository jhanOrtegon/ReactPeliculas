import React from 'react'

export const Search = () => {
    return (
        <>
            <div className="container animate__animated animate__fadeIn">
                <div className="row">
                    <div className="col col-md-5 m-auto d-flex justify-content-center mt-5 flex-column">
                        <h1 className='mb-3'>Busqueda</h1>
                        <form action="">
                            <input type="text" className='form-control mb-2' autoComplete='off' placeholder='ej: batman' />
                            <button type='submit' className='form-control btn btn-dark p-3'>Buscar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
