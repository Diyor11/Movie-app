import React, { useEffect } from 'react'
import './detail.scss'
import {Container, Grid, Typography, Stack} from '@mui/material'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncShowsDetail } from '../../features/movies/movieSlice'
import styled from 'styled-components'
import StarIcon from '@mui/icons-material/Star';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { removeMovie } from '../../features/movies/movieSlice'

const Item = styled.div`
    font-family: sans-serif;
    display: flex;
    align-items: center;
`

const Detail = () => {

    const dispatch = useDispatch()
    const {id} = useParams()
    const movie = useSelector(state => state.movies.movie)
    const ww = window.innerWidth

    useEffect(() => {
        console.log('useeffect work')
        dispatch(fetchAsyncShowsDetail(id))
        return () => {
            console.log('return work')
            dispatch(removeMovie())
        }
    }, [dispatch, id])

    return (
        <div className='detail'>
            <Container>
                <Grid container >
                    <Grid item md={9} sm={12} >
                        <Typography color='white' variant='h4'>
                            {movie.Title}
                        </Typography>
                        <Stack direction={ww > 900 ? 'row':'column'} spacing={2} sx={{pt: '15px'}} >
                            <Item>
                                <Typography variant='h6' color='white' fontSize='15px' >Imd rating: {movie.imdbRating}  </Typography>
                                <StarIcon sx={{color: 'yellow', p: '0 10px 0 5px'}} />
                            </Item>
                            <Item>
                                <Typography variant='h6' color='white' fontSize='15px' >Imdb Votes: {movie.imdbVotes}  </Typography>
                                <ThumbUpIcon sx={{color: 'white', p: '0 10px 0 5px'}} />
                            </Item>
                            <Item>
                                <Typography variant='h6' color='white' fontSize='15px' >Runtime: {movie.Runtime}  </Typography>
                                <MovieCreationIcon sx={{color: 'white', p: '0 10px 0 5px'}} />
                            </Item>
                            <Item>
                                <Typography variant='h6' color='white' fontSize='15px' >Year: {movie.Year}  </Typography>
                                <DateRangeIcon sx={{color: 'white', p: '0 10px 0 5px'}} />
                            </Item>
                        </Stack>
                        <Typography paraphy={true} sx={{pt: '22px'}} color='white'>
                            {movie.Plot}
                        </Typography>
                    </Grid>
                    <Grid item md={3} sm={6} >
                        <div className='img-wrap'>
                            <img src={movie.Poster} alt={movie.Title} />
                        </div>    
                    </Grid>                    
                </Grid>
            </Container>
        </div>
    )
}

export default Detail
