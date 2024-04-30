import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/Header'
import ImageChanger from './components/ImageChanger/ImageChanger'
import Basket from './pages/Basket'
import Home from './pages/Home'
import Liket from './pages/Liket'

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/Home' element={<Home />} />
				<Route path='/basket' element={<Basket />} />
				<Route path='/liked' element={<Liket />} />
				<Route path='/image_changer' element={<ImageChanger />} />
			</Routes>
		</div>
	)
}

export default App
