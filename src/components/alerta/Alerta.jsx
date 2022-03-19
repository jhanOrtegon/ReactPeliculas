import React from 'react'

export default function Alerta({ messaje, color }) {
    return (
        <div className={`alert alert-${color} my-3 animate__animated animate__fadeIn`} role="alert" >
            <h6 className='text-center m-0'>{messaje}</h6>
        </div>
    )
}
