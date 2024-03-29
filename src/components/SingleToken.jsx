import { AppBar, Box, Button, Container, IconButton, MenuItem, Paper, styled, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useParams } from 'react-router-dom';
import brightblueSkyBackground from '../images/brightblueSkyBackground.jpg';
import blueSkyBackground from '../images/blueSkyBackground.jpg';

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default function SingleToken() {

  const axios = require("axios");
  let { id } = useParams();
  const [apiResults, setApiResults] = useState([]);


  async function test() {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    setApiResults(data);
  }

  useEffect(() => {
    test();

  })

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#CCC'),
    backgroundColor:"#abb4db", color:"#7b3a8a", fontFamily: "Montserrat", fontWeight: "400",
    '&:hover': {
      backgroundColor:"#7b3a8a", color:"#abb4db", borderColor:"#abb4db",
    },
  }));
  
  return (
    apiResults.map(({ id, name, symbol, image, current_price, price_change_percentage_24h, market_cap_rank, market_cap, }) => (
        
        <Container sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection:"column" }}>
          <Button href="/" sx={{fontSize:"larger", mb:"-10%", mt:"5%",backgroundColor:"#7b3a8a", color:"#abb4db", borderColor:"#7b3a8a", fontFamily: "Montserrat", fontWeight: "400", '&:hover': {
          backgroundColor:"#abb4db", color:"#7b3a8a", borderColor:"#7b3a8a"}}} variant="contained"> 
          Back To The HomePage? </Button>
          <Paper align="center" sx={{  alignItems: "center", justifyContent: "center", width: "40%", height: "50%", p: "25px", mt: "18%", borderRadius: "20px", display: "flex", flexDirection: "column", backgroundImage: `url(${blueSkyBackground})`, "&:hover" : { backgroundImage: `url(${brightblueSkyBackground})` , filter: "drop-shadow(0 0 3rem white)" }}}>
            <Typography align="center" variant="myVariant" sx={{ fontSize: "40px", mb: "3px", fontWeight: "bold" }}>{name}</Typography>
            <Typography align="center" variant="myVariant" sx={{ fontSize: "17px", mb: "4px", textTransform: "uppercase" }}>({symbol})</Typography>
            <Typography align="center" variant='myVariant' sx={{ fontSize: "30px", mb: "-3px" }}>#{market_cap_rank} </Typography>
            <img style={{ margin: "10px" }} src={image} />
            <span style={{ marginBottom:"3px" }}>
                <Typography align="center" variant='myVariant' sx={{ fontSize: "30px", fontWeight: "bold" }}>Price: </Typography>
                &nbsp;
                <Typography align="center" variant='myVariant' sx={{ fontSize: "25px", }}> ${numberWithCommas(current_price.toString().slice(0, 5))}</Typography>
            </span>
            <span style={{marginBottom:"3px" }}>
                <Typography variant='myVariant' sx={{ fontSize: "30px", fontWeight: "bold" }}>24h%:</Typography>
                &nbsp; 
                <Typography variant="myVariant" sx={{ color: price_change_percentage_24h > 0 ? "rgb(14, 203, 60)" : "red", fontSize: "25px", fontWeight: "700" }}> {price_change_percentage_24h > 0 ? "+" : ""}{price_change_percentage_24h.toString().slice(0, -3)}%</Typography>
            </span>
            <span style={{ marginBottom:"3px" }}>
                <Typography align="center" variant='myVariant' sx={{ fontSize: "30px", fontWeight: "bold" }}>Market Cap:</Typography>
                &nbsp; &nbsp;
                <Typography align="center" variant='myVariant' sx={{ fontSize: "25px", }}>${numberWithCommas(market_cap.toString().slice(0, -6))}M</Typography>
            </span>
          </Paper>
        </Container>
    ))

  )
}
