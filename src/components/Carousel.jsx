import { Box, Container, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { numberWithCommas } from './SingleToken';
import AliceCarousel from 'react-alice-carousel';
import { useNavigate, Link } from 'react-router-dom';

export default function Carousel() {
    
  const [apiResults, setApiResults] = useState([]);
  const axios = require("axios");

  async function test() {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
    );
    setApiResults(data);
  }

  useEffect(() => {
    test();

  })

  const items = apiResults.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <Link style={{display:"flex", flexDirection:"column", alignItems:"center", textDecoration:"none",}} to={`/tokenInfo/${coin.id}`}>
        <img
          src={coin?.image}
          alt={coin.name}
          height="120"
          style={{ marginBottom: 10, }}
        />
        <span style={{marginBottom: 8, textTransform:"uppercase",color:"white"}}>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500, textDecorationLine:"none", color:"white" }}>
         $ {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Link> 
    );
})

const responsive = {
  0: {
    items: 2,
  },
  512: {
    items: 4,
  },
};

return(
  <AliceCarousel
   items={items}
   mouseTracking
   infinite
   autoPlayInterval={1000}
   animationDuration={1500}
   responsive={responsive}
   disableDotsControls
   disableButtonsControls
   autoPlay
   />
)
}

