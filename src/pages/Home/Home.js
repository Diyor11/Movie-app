import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import '../../common/color.scss'
import './home.scss'
import MovieList from '../../components/MovieList'
import {fetchAsyncMovies} from '../../features/movies/movieSlice'
import { fetchAsyncShows } from '../../features/movies/movieSlice'

const Home = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchAsyncMovies())
        dispatch(fetchAsyncShows())
    }, [dispatch])

    return (
        <div>
            <MovieList/>
        </div>
    )
}

export default Home
