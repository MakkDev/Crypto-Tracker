import { Route, Routes, useNavigate } from 'react-router-dom';
import Carousel from './components/Carousel';
import HomePage from './pages/HomePage';
import SingleToken from './components/SingleToken';
import NavBar from './components/NavBar';
import LoginModal from './components/LoginModal';
import { loginContext } from './Context';
import { useState } from 'react';

export default function App() {

  const [open, setOpen] = useState(false);

  

  return (
    <>
    <loginContext.Provider value={{open, setOpen}}> 
    <NavBar/>
     <Routes>
        <Route path='/tokenInfo/:id' element={<SingleToken/>}/>
        <Route path='/carousel' element={<LoginModal/>}/>
        <Route path='/' element={<HomePage/>} />
      </Routes>
      </loginContext.Provider>
    </>

  );
}
