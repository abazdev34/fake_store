import { type } from '@testing-library/user-event/dist/type';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
<<<<<<< HEAD
import ImageChanger from "./components/ImageChanger/ImageChanger"
import Basket from './pages/Basket';
import Liket from './pages/Liket';
// import Slayder from './pages/Slayder';
// import CardSk from './pages/CardSk';
import 'bootstrap/dist/css/bootstrap.min.css';



=======
import Basket from './pages/Basket';
import Liket from './pages/Liket';
import Slayder from './pages/Slayder';
import CardSk from './pages/CardSk';
>>>>>>> b513a5415fb1416100a0fc424c674dfd3571fc9f


function App() {



  return (
    <div>
<<<<<<< HEAD
=======
     
    



>>>>>>> b513a5415fb1416100a0fc424c674dfd3571fc9f
      <Header />
      <Routes>
        
        <Route path="/Home" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/liket" element={<Liket />} />
<<<<<<< HEAD
        <Route path="/image_changer" element={<ImageChanger/>}/>
=======
>>>>>>> b513a5415fb1416100a0fc424c674dfd3571fc9f
       </Routes>
    </div>
  );
}

export default App;
