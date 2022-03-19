import { useEffect, useState } from "react"

export const useFetch = (url, argument = {}) => {

    const [dataFetch, setDataFetch] = useState({})

    const handleFetch = async (url) => {
        const peticion = await fetch(url)
        const data = await peticion.json()
        setDataFetch(data)
        return data
    }

    useEffect(() => {
        handleFetch(url)
    }, [url])


    return { dataFetch };
}
