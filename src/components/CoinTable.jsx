import {Button, Container, Box, CardMedia, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField } from '@mui/material'
import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { numberWithCommas } from './SingleToken';

export default function CoinTable(props) {

    const axios = require("axios");
    let navigate = useNavigate();

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("")

    const myRef = useRef(null);

    async function getCoins() {
        const { data } = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        );
        setCoins(data);
    }
    useEffect(() => {
        getCoins();
    })

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  const executeScroll = () => myRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});

    return (
        <Container sx={{p:"0px", }}>
    <Typography align="center" sx={{mb:"15px", display:"flex", color: "#7b3a8a", fontSize: "40px", fontWeight: "900", fontFamily: "Montserrat", justifyContent:'center', '&:hover': {cursor: "pointer"} }}>Cryptocurrency Prices by Market Cap</Typography>
            <TextField onChange={(e) => setSearch(e.target.value)} variant="outlined" sx={{width:"100%", mb:"20px"}} label="Search For Your Favorite Cryptocurrency!"/> 
        <TableContainer sx={{ justifyContent: "center", alignItems: "center", display: "flex", }}>
            <Table >
                <TableHead sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                    <TableRow sx={{ display: "flex", borderRadius: "10px", backgroundColor: "#7b3a8a", width:{xs: "90%",sm: "90%", md: "100%", lg: "100%", xl: "100%" }, p:"1%", alignItems:"center" }}>
                        <TableCell sx={{ borderBottom: "none", flex: "1.55", color: "#abb4db", fontSize: {xs: "100%",sm: "100%", md: "130%", lg: "130%", xl: "130%" }, fontWeight: "600", fontFamily: "montserrat" }}>  Coin</TableCell>
                        <TableCell align="" sx={{display: {xs:"none", sm:"unset", lg:"unset", xl:"unset"}, borderBottom: "none", flex: "1.5", color: "#abb4db", fontSize: {xs: "80%",sm: "100%", md: "130%", lg: "130%", xl: "130%%" }, fontWeight: "600", fontFamily: "montserrat" }}> Rank</TableCell>
                        <TableCell align="center" sx={{ borderBottom: "none", flex: "1.3", color: "#abb4db", fontSize: {xs: "100%",sm: "100%", md: "130%", lg: "130%", xl: "130%" }, fontWeight: "600", fontFamily: "montserrat" }}> Price</TableCell>
                        <TableCell align="center" sx={{ borderBottom: "none", flex: "1.3", color: "#abb4db", fontSize: {xs: "100%",sm: "100%", md: "130%", lg: "130%", xl: "130%" }, fontWeight: "600", fontFamily: "montserrat" }}> 24h % Change</TableCell>
                        <TableCell align="center" sx={{ borderBottom: "none", flex: "1.3", color: "#abb4db", fontSize: {xs: "100%",sm: "100%", md: "130%", lg: "130%", xl: "130%" }, fontWeight: "600", fontFamily: "montserrat" }}> Market Cap</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    {handleSearch().slice((page - 1) * 10, (page - 1) * 10 + 10).map((coin) => (
                        <TableRow onClick={()=> navigate(`/tokenInfo/${coin.id}`)} sx={{display:"flex", justifyContent:"center", width:"100%", "&:hover": {cursor:"pointer"}}}>
                            <TableCell sx={{display:"flex", alignItems:"center", flex: "1.55", ml:"7px"}} >
                                <img style={{ width: "25%", marginRight:"4%", marginLeft:"-5px", filter: "drop-shadow(0 0 0.1rem black)" }} src={coin.image} />
                                <span>
                                    <Typography sx={{textTransform:"uppercase", fontFamily:"montserrat", fontWeight:"600", fontSize: {xs: "100%",sm: "100%", md: "130%", lg: "130%", xl: "130%" }}}> {coin.symbol} </Typography>
                                    <Typography sx={{fontFamily:"montserrat", fontWeight:"400", fontSize: {xs: "90%",sm: "90%", md: "110%", lg: "110%", xl: "110%" }}}> {coin.name} </Typography>
                                </span>
                            </TableCell>
                            <TableCell  align='left' sx={{display: {xs:"none", sm:"unset", lg:"unset", xl:"unset"}, flex: "1.5", fontFamily:"montserrat", fontWeight:"600", fontSize: {xs: "100%",sm: "100%", md: "130%", lg: "130%", xl: "130%" }}} >
                                #{coin.market_cap_rank}</TableCell>
                            <TableCell align="center" sx={{flex: "1.3", fontFamily:"montserrat", fontWeight:"600", fontSize:  {xs: "80%",sm: "80%", md: "100%", lg: "100%", xl: "100%" }}}> ${ coin.current_price < 1 ? coin.current_price.toString().slice(0,-3) :
                                `${numberWithCommas(coin.current_price)}` } </TableCell>
                            <TableCell align="center" sx={{flex: "1.3", fontFamily:"montserrat", fontWeight:"600", fontSize:  {xs: "80%",sm: "80%", md: "100%", lg: "100%", xl: "100%" }, color: coin.price_change_percentage_24h > 0 ? "rgb(14, 203, 60)" : "red" }}>
                                {coin.price_change_percentage_24h > 0 ? "+" : ""}{coin.price_change_percentage_24h.toString().slice(0, -3)}%</TableCell>
                            <TableCell align="center" sx={{flex: "1.3", fontFamily:"montserrat", fontWeight:"600", fontSize:   {xs: "80%",sm: "80%", md: "100%", lg: "100%", xl: "100%" }}} >
                                ${numberWithCommas(coin.market_cap.toString().slice(0, -6))}M</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Pagination ref={props.refProp} onChange={(_, value) => {setPage(value); window.scroll(0, 450);}}
         color="secondary" sx={{ display:"flex", justifyContent:"center",alignItems:"center", m:"2%"}} count={(handleSearch()?.length / 10).toFixed(0)}
        />
        </Container>
    )
}
