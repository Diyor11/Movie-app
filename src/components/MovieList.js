import React from 'react'
import {useSelector} from 'react-redux'
import {Card, CardContent, Grid, Container, Typography} from '@mui/material'
import {makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    cardContent: {
        backgroundColor: '#1a242f',
        borderRadius: '12px',
        overflow: 'hidden'
    },
    cardtitle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center ',
        padding: '7px 0 13px'
    },
    card: {
        "&:hover": {
            transform: 'scale(1.03)'
        },
        background: 'transparent !important',

    },
    list: {
        minHeight: 'calc(100vh - (64px + 162px))',
        [theme.breakpoints.down('xs')]: {
        minHeight: 'calc(100vh - (56px + 162px))',
        }
    }
}))

const MovieList = () => {

    const movies = useSelector(state => state.movies);
    const classes = useStyles()

    return (
        <div className={classes.list}
            style={{padding: '30px 0'}}>
            <Container>
                <Grid container >
                    {
                        (movies.movies.Search && movies.shows.Search) && [...movies.movies.Search, ...movies.shows.Search].map((item, index) => (
                            <Grid md={3} sm={4} sx={{p: '10px 7px 0'}} key={index} xs={12} item >
                                <NavLink to={'/' + item.imdbID}>
                                <Card className={classes.card} >
                                    <CardContent className={classes.cardContent}>
                                        <div className='card_img_wrap'>
                                            <img src={item.Poster}
                                                alt={item.Type}/>
                                        </div>
                                        <div className={classes.cardtitle}>
                                            <Typography variant='h5' color='white' > {item.Type} </Typography> 
                                            <Typography variant='h6' color='white'>{item.Year}</Typography>
                                        </div>
                                        <Typography  color='white'>
                                            {item.Title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                                </NavLink>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default MovieList
