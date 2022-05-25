import { Box, CardMedia, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { numberWithCommas } from './SingleToken';

export default function CoinTable() {

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const axios = require("axios");
    let navigate = useNavigate();

    async function test() {
        const { data } = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        );
        setCoins(data);
    }
    useEffect(() => {
        test();
    })

    return (
        <TableContainer sx={{ justifyContent: "center", alignItems: "center", display: "flex", }}>
            <Table >
                <TableHead sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                    <TableRow sx={{ display: "flex", borderRadius: "10px", backgroundColor: "#7b3a8a", width:"100%", p:"1%" }}>
                        <TableCell sx={{ borderBottom: "none", flex: "1.55", color: "#abb4db", fontSize: "22px", fontWeight: "600", fontFamily: "montserrat" }}>  Coin</TableCell>
                        <TableCell align="left" sx={{ borderBottom: "none", flex: "1.5", color: "#abb4db", fontSize: "22px", fontWeight: "600", fontFamily: "montserrat" }}> Rank</TableCell>
                        <TableCell align="center" sx={{ borderBottom: "none", flex: "1.3", color: "#abb4db", fontSize: "22px", fontWeight: "600", fontFamily: "montserrat" }}> Price</TableCell>
                        <TableCell align="center" sx={{ borderBottom: "none", flex: "1.3", color: "#abb4db", fontSize: "22px", fontWeight: "600", fontFamily: "montserrat" }}> 24h % Change</TableCell>
                        <TableCell align="center" sx={{ borderBottom: "none", flex: "1.3", color: "#abb4db", fontSize: "22px", fontWeight: "600", fontFamily: "montserrat" }}> Market Cap</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {coins.map((coin) => (
                        <TableRow onClick={()=> navigate(`/tokenInfo/${coin.id}`)} sx={{display:"flex", justifyContent:"center", width:"100%", "&:hover": {cursor:"pointer"}}}>
                            <TableCell  sx={{display:"flex", alignItems:"center", flex: "1.55"}} >
                                <img style={{ width: "20%", marginRight:"2%", marginLeft:"-5px" }} src={coin.image} />
                                <span>
                                    <Typography sx={{textTransform:"uppercase", fontFamily:"montserrat", fontWeight:"600", fontSize: "20px"}}> {coin.symbol} </Typography>
                                    <Typography sx={{fontFamily:"montserrat", fontWeight:"400", fontSize: "20px"}}> {coin.name} </Typography>
                                </span>
                            </TableCell>
                            <TableCell align='left' sx={{flex: "1.5", fontFamily:"montserrat", fontWeight:"600", fontSize: "18px"}} >
                                #{coin.market_cap_rank}</TableCell>
                            <TableCell align="center" sx={{flex: "1.3", fontFamily:"montserrat", fontWeight:"600", fontSize: "18px"}}> ${ coin.current_price < 1 ? coin.current_price.toString().slice(0,-3) :
                                `${numberWithCommas(coin.current_price)}` } </TableCell>
                            <TableCell align="center" sx={{flex: "1.3", fontFamily:"montserrat", fontWeight:"600", fontSize: "18px", color: coin.price_change_percentage_24h > 0 ? "rgb(14, 203, 60)" : "red" }}>
                                {coin.price_change_percentage_24h > 0 ? "+" : ""}{coin.price_change_percentage_24h.toString().slice(0, -3)}%</TableCell>
                            <TableCell align="center" sx={{flex: "1.3", fontFamily:"montserrat", fontWeight:"600", fontSize: "18px"}} >
                                ${numberWithCommas(coin.market_cap.toString().slice(0, -6))}M</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

