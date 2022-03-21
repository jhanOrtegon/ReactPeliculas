import { Route, Routes } from "react-router-dom"
import { CardResult } from "../components/card/CardResult"
import { Movies } from "../components/movies/Movies"
import { Search } from "../components/search/Search"
import { Series } from "../components/series/Series"
import { Nav } from '../components/ui/Nav'

export const DashboardRoute = () => {

    return (
        <>
            <Nav />
            <Routes>
                <Route path='/movies' element={<Movies />} exact />
                <Route path='/series' element={<Series />} exact />
                <Route path='/search' element={<Search />} exact />
                <Route path='/result/:resultId' element={<CardResult />} exact />
            </Routes>
        </>
    )
}
