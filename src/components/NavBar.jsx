import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {

    let navigate = useNavigate();

  return (
    <AppBar sx={{backgroundColor: "#abb4db", position: "sticky" }}>
          <Toolbar >
            <Typography onClick={() => navigate("/")} sx={{flex:"1",color: "#7b3a8a", fontSize: "25px", fontWeight: "900", fontFamily: "Montserrat", '&:hover':{cursor: "pointer"}}}>Crypto Tracker</Typography>
            <Button variant="outlined" sx={{borderColor:"#7b3a8a", m: "4px",fontSize:"17px", backgroundColor:"#abb4db", color:"#7b3a8a", fontFamily: "Montserrat", fontWeight: "400", '&:hover': {
       backgroundColor:"#7b3a8a", color:"#abb4db", borderColor:"#7b3a8a"
    } }}>Login</Button>
          </Toolbar>
        </AppBar >
  )
}

