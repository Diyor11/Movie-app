import {  Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const FooterComp = styled.footer`
    background-color: #1a242f;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    flex-direction: column;
    margin-top: 30px;
`
const Footer = () => {
    return(
        <FooterComp>
            <Typography variant='h5'>Movie App</Typography>
            <Typography>c 2021, Movie, Inc or affilitaes</Typography>
        </FooterComp>
    )
}

export default Footer
