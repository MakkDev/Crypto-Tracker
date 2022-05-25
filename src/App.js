import { Route, Routes, useNavigate } from 'react-router-dom';
import Carousel from './components/Carousel';
import HomePage from './pages/HomePage';
import SingleToken from './components/SingleToken';
import NavBar from './components/NavBar';

export default function App() {

  return (
    <>
    <NavBar/>
     <Routes>
        <Route path='/tokenInfo/:id' element={<SingleToken/>}/>
        <Route path='/carousel' element={<Carousel/>}/>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </>

  );
}
