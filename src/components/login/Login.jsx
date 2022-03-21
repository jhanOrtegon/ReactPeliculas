// import React, { useContext } from 'react'
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { types } from '../../types/types';
import Alerta from '../alerta/Alerta';
import { AuthContext } from '../auth/authContext';
// import { AuthContext } from '../auth/authContext'

export const Login = () => {

    const { values, handleChange } = useForm({ usuario: '', password: '' })
    const { usuario, password } = values
    const { dispatch } = useContext(AuthContext);

    const [errorForm, setErrorForm] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (usuario.length <= 0 || password.length <= 0) {
            setErrorForm(true)
            return
        }
        setErrorForm(false)

        dispatch({
            type: types.login,
            payload: values
        })

        navigate('/movies', { replace: true })
    }



    return (
        <>
            <div className="container animate__animated animate__fadeIn">
                <div className="row">
                    <div className="col col-md-5 m-auto d-flex justify-content-center mt-5 flex-column">
                        <h1>Login</h1>
                        <form action="" onSubmit={handleSubmit}>
                            <input onChange={handleChange} type="text" name='usuario' className='form-control mb-2' autoComplete='off' placeholder='ej: jhankee' />
                            <input onChange={handleChange} type="password" name='password' className='form-control mb-2' autoComplete='off' placeholder='*******' />
                            <button type='submit' className='form-control btn btn-danger p-3'>Iniciar Session</button>
                        </form>
                        {
                            errorForm &&
                            <Alerta messaje='Error en el Formulario' color='danger' className='animate__animated animate__fadeIn' />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
