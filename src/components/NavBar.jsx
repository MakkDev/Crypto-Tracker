import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { signOut } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginContext } from '../Context';
import { auth } from '../firebase';
import LoginModal from './LoginModal';

export default function NavBar() {

    const [user, setUser] = useState([]);
    let navigate = useNavigate();

    const {open, setOpen} = useContext(loginContext);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const handleSignOut = () => {
        signOut(auth).catch((error) => alert(error.message));
    }
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
        })
      })

    return (
        <AppBar sx={{ backgroundColor: "#abb4db", position: "sticky" }}>
            <LoginModal/>
            <Toolbar >
                <Typography onClick={() => navigate("/")} sx={{ flex: "1", color: "#7b3a8a", fontSize: "25px", fontWeight: "900", fontFamily: "Montserrat", '&:hover': { cursor: "pointer" } }}>Crypto Tracker</Typography>

                {auth.currentUser ? <>
                    {/* <Button variant="outlined" sx={{
                        borderColor: "#7b3a8a", m: "4px", fontSize: "17px", backgroundColor: "#abb4db", color: "#7b3a8a", fontFamily: "Montserrat", fontWeight: "400", '&:hover': {
                        backgroundColor: "#7b3a8a", color: "#abb4db", borderColor: "#7b3a8a"
                        }
                    }}>
                        WatchList</Button> */}
                    <Button onClick={handleSignOut} sx={{   fontSize: "17px", m: "4px", backgroundColor: "#7b3a8a", color: "#abb4db", borderColor: "#7b3a8a", fontFamily: "Montserrat", fontWeight: "400", '&:hover': {
                        backgroundColor: "#abb4db", color: "#7b3a8a", borderColor: "#7b3a8a"
                        }
                    }} variant="outlined">
                        Sign Out </Button> </>
                        : <Button onClick={handleClickOpen} variant="outlined" sx={{   borderColor: "#7b3a8a", m: "4px", fontSize: "17px", backgroundColor: "#abb4db", color: "#7b3a8a", fontFamily: "Montserrat", fontWeight: "400", '&:hover': {
                        backgroundColor: "#7b3a8a", color: "#abb4db", borderColor: "#7b3a8a"
                    }
                }}>Login</Button>
                }
            </Toolbar>
        </AppBar >
    )
}

