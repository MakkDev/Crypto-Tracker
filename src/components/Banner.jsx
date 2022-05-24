import { Card, Container, Typography } from '@mui/material';
import React from 'react'
import Carousel from '../components/Carousel';
import CoinTable from '../components/CoinTable';


export default function Banner() {
    return (            
        <Container sx={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection:"column" }}>
            <Card sx={{width:"100%", pl:"5%", pb:"3%", mb:"30px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection:"column",  backgroundImage: 'url("https://cdn.staticcrate.com/stock-hd/effects/footagecrate-4k-looping-tech-background-clean-blue-2-prev-full.png")' }}> 
            <Typography variant="myVariant" sx={{ fontSize: "65px", mb:"20px", fontFamily:"montserrat", fontWeight:"700" }}>
                Crypto Tracker
            </Typography>
            <Typography sx={{ fontSize: "18px", mb:"30px", color: "#CCC", }}>
                Track The Prices Of Your Favorite Cryptocurrencies!
            </Typography>
            <Carousel/>
            </Card>
        </Container>    
  )
}
