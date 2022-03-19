import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { ListSeries } from './ListSeries';

export const Series = () => {
    const api_key = 'e3ff9c88739266879049ce32b9aa3ed8';
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`

    const { dataFetch } = useFetch(url)
    const data = (Object.values(dataFetch).length) ?
        dataFetch.results.map(({ poster_path, name, original_language, overview, id }) => ({ poster_path, name, original_language, overview, id })) : [];
    console.log(data);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col mt-4">
                        <h1>Series</h1>
                        <hr />
                    </div>
                </div>

                <div className="row gap-3 justify-content-between mb-5 ">
                    {
                        data.map(e => (
                            <ListSeries key={e.id} {...e} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

