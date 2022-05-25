import { Card, Container, Typography } from '@mui/material';
import React from 'react'
import Carousel from '../components/Carousel';
import CoinTable from '../components/CoinTable';


export default function Banner() {
    return (            
        <Container sx={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection:"column" }}>
            <Card sx={{width:"100%", pl:"5%", pb:"3%", pt:"2%", mb:"30px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection:"column",  backgroundImage: 'url("https://i0.wp.com/pswordpress-production.s3.amazonaws.com/2020/03/dark-blue-glowing-circuit-board-tech-background-vector-19816895_0.jpg?ssl=1")' }}> 
            <Typography align="center" variant="myVariant" sx={{ fontSize: "65px", mb:"20px", fontFamily:"montserrat", fontWeight:"700" }}>
                Crypto Tracker
            </Typography>
            <Typography align="center" sx={{ fontSize: "34px", mb:"30px", color: "#CCC", fontFamily:"montserrat" }}>
                Trending Coins:
            </Typography>
            <Carousel/>
            </Card>
        </Container>    
  )
}
