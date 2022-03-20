import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useForm } from "../../hooks/useForm";
import Alerta from '../alerta/Alerta';
import { ListMovies } from '../movies/ListMovies';

export const Search = () => {

    const { handleChange, values } = useForm({ search: '' });
    const { search = '' } = values
    const api_key = 'e3ff9c88739266879049ce32b9aa3ed8';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=${search}}`;
    const { dataFetch } = useFetch(url)
    const data = (Object.values(dataFetch).length) ?
        dataFetch.results.map(({ poster_path, title, original_language, overview, id }) => ({ poster_path, title, original_language, overview, id })) : []

    return (
        <>
            <div className="container animate__animated animate__fadeIn">
                <div className="row">
                    <div className="col col-md-5 m-auto d-flex justify-content-center mt-5 flex-column">
                        <h1 className='mb-3'>Busqueda</h1>
                        <form>
                            <input onChange={handleChange} type="text" name='search' className='p-3 form-control mb-2' autoComplete='off' placeholder='ej: batman' />
                        </form>
                        {
                            !search.length
                                ? <Alerta color='primary' messaje='Busca tu Movie' />
                                : search.length && !data.length && <Alerta color='danger' messaje='Movie No Encontrada' />


                        }
                        {
                        }
                    </div>
                </div>


                <div className="row gap-3 justify-content-between my-5">
                    {
                        data.map(e => (
                            <ListMovies key={e.id} {...e} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
