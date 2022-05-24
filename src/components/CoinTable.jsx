import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function CoinTable() {

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const axios = require("axios");


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
    <TableContainer sx={{justifyContent:"center", alignItems:"center", display:"flex", }}>
        <Table>
        <TableHead sx={{ display:"flex", justifyContent:"center",alignItems:"center", }}>
            <TableRow sx={{ alignContent:"center", display:"flex", borderRadius:"10px", backgroundColor:"#7b3a8a", width:"100%"}}> 
            <TableCell sx={{borderBottom:"none", flex:"1.75", color:"#abb4db", fontSize:"18px", fontWeight:"600", fontFamily:"montserrat" }}>  Coin</TableCell> 
            <TableCell sx={{borderBottom:"none", flex:"1.5", color:"#abb4db", fontSize:"18px", fontWeight:"600", fontFamily:"montserrat" }}> Rank</TableCell>   
            <TableCell sx={{borderBottom:"none", flex:"0.85", color:"#abb4db", fontSize:"18px", fontWeight:"600", fontFamily:"montserrat" }}> Price</TableCell>        
            <TableCell sx={{borderBottom:"none", flex:"0.7", color:"#abb4db", fontSize:"18px", fontWeight:"600", fontFamily:"montserrat" }}> 24h % Change</TableCell>        
            <TableCell sx={{borderBottom:"none", flex:"0.75", color:"#abb4db", fontSize:"18px", fontWeight:"600", fontFamily:"montserrat" }}> Market Cap</TableCell>        
             </TableRow>
        </TableHead>
        <TableBody>
            
        </TableBody>
        </Table>  
    </TableContainer>
  )
}

