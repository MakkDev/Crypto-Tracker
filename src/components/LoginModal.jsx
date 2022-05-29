import { TabsListUnstyled } from '@mui/base';
import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, Tab, Tabs, TextField, Typography, } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { loginContext } from '../Context';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';



export default function LoginModal() {

  let navigate = useNavigate();
  const { open, setOpen } = useContext(loginContext);
  const [registering, setRegistering] = useState(false)
  const [loggingIn, setLoggingIn] = useState(true)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState("");


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
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const incorrectPassword = () => {
    alert('Passwords do not match, please try again.');
};

  const signIn = async () => {
    await signInWithEmailAndPassword(auth, email, password).then(() => {
        setEmail("");
        setPassword("");
        handleClose();
    })
        .catch((error) => {
            alert("Invalid Email or Password");
        })
};

const register = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => alert(error.message));
        signInWithEmailAndPassword(auth, email, password).then(() => {
          setEmail("");
          setPassword("");
          handleClose();
      })
};

useEffect(() => {
  auth.onAuthStateChanged((user) => {
      setUser(user);
  })
})


  return (
    <Box>
      <TabContext >
        <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose} >
          <DialogTitle sx={{borderColor:"red", display: "flex", justifyContent: "center" }}>
            <Box>
                <Button onClick={handleLogin} sx={{fontSize:"80%", p:"13px", m:"5px", borderRadius:"7px", backgroundColor: loggingIn ? "#9D4AB0" : "#7b3a8a", color:"white", "&:hover":{backgroundColor:"#9D4AB0", filter: "drop-shadow(0 0 0.5rem white)"} }} > Login </Button>
                <Button onClick={handleRegister} sx={{fontSize:"80%", p:"13px", m:"5px", borderRadius:"7px", backgroundColor: registering ? "#9D4AB0" : "#7b3a8a", color:"white", "&:hover":{backgroundColor:"#9D4AB0", filter: "drop-shadow(0 0 0.5rem white)"} }} > Sign Up </Button>
            </Box>  
          </DialogTitle>
          <DialogContent sx={{display: "flex", flexDirection: "column", m: "50px", mt:"30px" }}>
            <TextField onChange={handleEmailChange} color="secondary" variant="outlined" sx={{mt:"10px", input: {color:'white'}, mb: "17px", ml: "-20px" }} label="Email Address" />
            <TextField type="password" onChange={handlePasswordChange} color="secondary" variant="outlined" sx={{ mb: "17px", ml: "-20px", input: {color:'white'}, }} label="Password" />
            { registering ? <> <TextField type="password" onChange={handleConfirmPasswordChange} color="secondary" variant="outlined" sx={{ mb: "5px", ml: "-20px", input: {color:'white'}, }} label="Confirm Password" /> <Button onClick={confirmPassword === password ? register : incorrectPassword } sx={{fontSize:"100%", p:"13px", mt:"5%", borderRadius:"7px", backgroundColor: "#7b3a8a", color:"white", "&:hover":{backgroundColor:"#9D4AB0", filter: "drop-shadow(0 0 0.5rem white)"} }} > Sign Up! </Button> </> 
             : <Button onClick={signIn} sx={{fontSize:"100%", p:"13px", mt:"5%", borderRadius:"7px", backgroundColor: "#7b3a8a", color:"white", "&:hover":{backgroundColor:"#9D4AB0", filter: "drop-shadow(0 0 0.5rem white)"} }} > Login </Button>}
          </DialogContent>
        </Dialog>
      </TabContext>
    </Box>
  )
}
