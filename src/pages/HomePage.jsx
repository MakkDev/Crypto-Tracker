import React, { useEffect, useState } from 'react';
import axios from "axios";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Box, Container, Paper, Typography } from '@mui/material';
import { numberWithCommas } from '../components/SingleToken';
import Carousel from '../components/Carousel';
import CoinTable from '../components/CoinTable';

export default function HomePage() {

    const [coinImg, setCoinImg] = useState("");
    const [apiResults, setApiResults] = useState([]);
    const axios = require("axios");
    const navigate = useNavigate();


    async function test() {
        const { data } = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        );
        setCoinImg(data[0].image)
        setApiResults(data);
    }

    useEffect(() => {
        test();

    }) 

    return (
        apiResults.map(({ id, name, symbol, image, current_price, price_change_percentage_24h, market_cap_rank, market_cap }) => (
            
            <Container sx={{ p:"90px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection:"column" }}>
                <Container sx={{mb:"30px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection:"column" }}> 
                <Typography variant="myVariant" sx={{ fontSize: "65px", mt:"-50px", mb:"20px", fontFamily:"montserrat", fontWeight:"700" }}>
                    Crypto Tracker
                </Typography>
                <Typography sx={{ fontSize: "18px", mb:"30px" }}>
                    Track The Prices Of Your Favorite Cryptocurrencies!
                </Typography>
                <Carousel/>
                </Container>
                <CoinTable/>
            </Container>
        ))   
      )
}
