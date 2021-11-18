import React from 'react'
import { AppBar, Toolbar, Typography, Avatar, Container } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    appbar: {
        backgroundColor: '#0f171e !important',
        backdropFilter: 'blur(20px)'
    }, 
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}))

const Header = () => {

    const ww = window.innerWidth
    const classes = useStyles()

    return (
        <AppBar className={classes.appbar}>
            <Container>
            <Toolbar className={classes.toolbar}>
                <NavLink to='/'>
                    <Typography color='white' variant={ww > 500 ? 'h4':'h5'} >Movie App</Typography>
                </NavLink>
                <Avatar alt='user' />
            </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
