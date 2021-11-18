import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from '../../common/apis/movieApi'
import { movieApiKey } from '../../common/apis/movieApiKey'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async() => {
    const res = await movieApi.get(`?apiKey=${movieApiKey}&s=${'Harry'}&type=movie`)
    return res.data
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async() => {
    const res = await movieApi.get(`?apiKey=${movieApiKey}&s=${'Friends'}&type=movie`)
    return res.data
})

export const fetchAsyncShowsDetail = createAsyncThunk('movies/fetchAsyncShowsDetail', async(id) => {
    const res = await movieApi.get(`?apiKey=${movieApiKey}&i=${id}&Plot=full`)
    return res.data
})

const initialState = {
    movies: {},
    shows: {},
    movie: {}
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        // addMovie: (state, {payload}) => {
        //     state.movies = payload
        // },
        removeMovie: (state) => {
            state.movie = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('pending') 
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log('fetched')
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('rejected')
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log('fetched')
            return {...state, shows: payload}
        },
        [fetchAsyncShowsDetail.fulfilled]: (state, {payload}) => {
            console.log('fetched')
            return {...state, movie: payload}
        },
    }
})


export const { removeMovie } = movieSlice.actions
// export const { addMovie } = movieSlice.actions
export default movieSlice.reducer