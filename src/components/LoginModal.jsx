import { Dialog, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { loginContext } from '../Context';

export default function LoginModal() {
  
  const {open, setOpen} = useContext(loginContext);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
    return (
    <Dialog open={open} onClose={handleClose} >
        <DialogTitle> Login </DialogTitle>
        <DialogContent sx={{ display:"flex", flexDirection:"column", m:"60px"}}> 
            <TextField sx={{ mb:"5px", ml:"-20px"}} label="Email Address"/>
            <TextField sx={{ mb:"5px", ml:"-20px"}} label="Password"/>
        </DialogContent>
    </Dialog>
  )
}
