import { TabsListUnstyled } from '@mui/base';
import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, Tab, Tabs, TextField, Typography, } from '@mui/material'
import React, { useContext, useState } from 'react'
import { loginContext } from '../Context';
import { TabContext, TabList, TabPanel } from "@mui/lab";



export default function LoginModal() {

  const { open, setOpen } = useContext(loginContext);
  const [registering, setRegistering] = useState(false)
  const [loggingIn, setLoggingIn] = useState(true)


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRegister = () => {
    setRegistering(true);
    setLoggingIn(false);
  };
  const handleLogin = () => {
    setLoggingIn(true);
    setRegistering(false);
  };


  return (
    <Box >
      <TabContext >
        <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose} >
          <DialogTitle sx={{borderColor:"red", display: "flex", justifyContent: "center" }}>
            <Box>
                <Button onClick={handleLogin} sx={{fontSize:"80%", p:"13px", m:"5px", borderRadius:"7px", backgroundColor: loggingIn ? "#9D4AB0" : "#7b3a8a", color:"white", "&:hover":{backgroundColor:"#9D4AB0", filter: "drop-shadow(0 0 0.5rem white)"} }} > Login </Button>
                <Button onClick={handleRegister} sx={{fontSize:"80%", p:"13px", m:"5px", borderRadius:"7px", backgroundColor: registering ? "#9D4AB0" : "#7b3a8a", color:"white", "&:hover":{backgroundColor:"#9D4AB0", filter: "drop-shadow(0 0 0.5rem white)"} }} > Sign Up </Button>
                {/* <Typography sx={{display:"flex", justifyContent:"center"}}> {registering ? "Sign Up Now!" : "Login To View Your Watchlist"} </Typography> */}
            </Box>  
          </DialogTitle>
          <DialogContent sx={{display: "flex", flexDirection: "column", m: "50px", mt:"30px" }}>
            <TextField color="secondary" variant="outlined" sx={{mt:"10px", input: {color:'white'}, mb: "17px", ml: "-20px" }} label="Email Address" />
            <TextField color="secondary" variant="outlined" sx={{ mb: "17px", ml: "-20px", input: {color:'white'}, }} label="Password" />
            { registering ? <> <TextField color="secondary" variant="outlined" sx={{ mb: "5px", ml: "-20px", input: {color:'white'}, }} label="Confirm Password" /> <Button sx={{fontSize:"100%", p:"13px", mt:"5%", borderRadius:"7px", backgroundColor: "#7b3a8a", color:"white", "&:hover":{backgroundColor:"#9D4AB0", filter: "drop-shadow(0 0 0.5rem white)"} }} > Sign Up! </Button> </> 
             : <Button sx={{fontSize:"100%", p:"13px", mt:"5%", borderRadius:"7px", backgroundColor: "#7b3a8a", color:"white", "&:hover":{backgroundColor:"#9D4AB0", filter: "drop-shadow(0 0 0.5rem white)"} }} > Login </Button>}
          </DialogContent>
        </Dialog>
      </TabContext>
    </Box>
  )
}
