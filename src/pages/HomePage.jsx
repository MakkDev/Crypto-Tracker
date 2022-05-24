import React, { useEffect, useState } from 'react';
import axios from "axios";
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Box, Card, Container, Paper, Typography } from '@mui/material';
import { numberWithCommas } from '../components/SingleToken';
import Carousel from '../components/Carousel';
import CoinTable from '../components/CoinTable';
import Banner from '../components/Banner';

export default function HomePage() {
    return ( 
        <> 
        <Banner/>
        <CoinTable/>
        </> 
        
  
      )
}
