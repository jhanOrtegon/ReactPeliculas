import React from 'react'

export const Login = () => {
    return (
        <>
            <div className="container animate__animated animate__fadeIn">
                <div className="row">
                    <div className="col col-md-5 m-auto d-flex justify-content-center mt-5 flex-column">
                        <h1>Login</h1>
                        <form action="">
                            <input type="text" className='form-control mb-2' autoComplete='off' placeholder='ej: jhankee' />
                            <input type="password" className='form-control mb-2' autoComplete='off' placeholder='*******' />
                            <button type='submit' className='form-control btn btn-danger p-3'>Iniciar Session</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
