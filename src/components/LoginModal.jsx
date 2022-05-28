import { TabsListUnstyled } from '@mui/base';
import { Box, Dialog, DialogContent, DialogContentText, DialogTitle, Tab, Tabs, TextField, } from '@mui/material'
import React, { useContext, useState } from 'react'
import { loginContext } from '../Context';
import { TabContext, TabList, TabPanel } from "@mui/lab";



export default function LoginModal() {

  const { open, setOpen } = useContext(loginContext);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box >
      <TabContext >
        <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose} >
          <DialogTitle sx={{borderColor:"red", display: "flex", justifyContent: "center" }}>
            <Box>
              <TabList textColor="secondary" indicatorColor="secondary">
                <Tab sx={{color:"white", borderColor:"blue", "&:hover":{borderRadius:"5px", backgroundColor:"#7b3a8a"} }} label="Login" value="1" />
                <Tab sx={{color:"white", borderColor:"blue", "&:hover":{borderRadius:"5px", backgroundColor:"#7b3a8a"} }} label="Sign Up" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1"> Yessir </TabPanel>
            <TabPanel value="2"> Yessir </TabPanel>
          </DialogTitle>
          <DialogContent sx={{display: "flex", flexDirection: "column", m: "70px" }}>
            <TextField variant="outlined" sx={{ input: {color:'white'}, mb: "15px", ml: "-20px" }} label="Email Address" />
            <TextField variant="outlined" sx={{ mb: "5px", ml: "-20px" }} label="Password" />
          </DialogContent>
        </Dialog>
      </TabContext>
    </Box>
  )
}
