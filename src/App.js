import { type } from '@testing-library/user-event/dist/type';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Basket from './pages/Basket';
import Liket from './pages/Liket';
import Slayder from './pages/Slayder';
import CardSk from './pages/CardSk';
import ImageChanger from "./components/ImageChanger/ImageChanger"

function App() {



  return (
    <div>
     
    



      <Header />
      <Routes>
        
        <Route path="/Home" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/liket" element={<Liket />} />
        <Route path="/image_changer" element={<ImageChanger/>}/>
       </Routes>
    </div>
  );
}

export default App;
