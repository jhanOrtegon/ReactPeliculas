import React from 'react'
import { useNavigate } from 'react-router-dom'
import Alerta from '../alerta/Alerta';

export const CardResult = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Alerta color="danger" messaje="Esta funcionalidad aun no esta disponible" />
                    </div>
                    <div className="col-4 mt-2">
                        <div className="btn btn-dark" onClick={() => navigate(-1)}>Regresar</div>
                    </div>
                </div>
            </div>
        </>
    )
}
