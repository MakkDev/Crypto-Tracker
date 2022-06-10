import { Card, Container, Typography } from '@mui/material';
import React from 'react'
import Carousel from '../components/Carousel';
import CoinTable from '../components/CoinTable';
import darkBlueCircuit from '../images/darkBlueCircuit.webp';



export default function Banner() {
    return (            
        <Container sx={{ mt:"1px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection:"column",  }}>
            <Card sx={{width:"100%", pl:"5%", pb:"4%", pt:"3%", mb:"30px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection:"column",  backgroundImage: `url(${darkBlueCircuit})` }}> 
            <Typography align="center" variant="myVariant" sx={{ fontSize: "65px", mb:"20px", mt:"-5px", fontFamily:"montserrat", fontWeight:"700" }}>
                Crypto Tracker
            </Typography>
            <Typography align="center" sx={{ fontSize: "34px", mb:"40px", color: "#CCC", fontFamily:"montserrat" }}>
               Top Trending Coins:
            </Typography>
            <Carousel/>
            </Card>
        </Container>    
  )
}
