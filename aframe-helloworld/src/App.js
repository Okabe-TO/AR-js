import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AframePage from './pages/AframePage';
import AFrameReactPage from './pages/AframeReactPage';
import AframeArPage from './pages/AframeArPage';
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/aframe" element={<AframePage />} />
				<Route path="/aframe-react" element={<AFrameReactPage />} />
				<Route path="/aframe-ar" element={<AframeArPage />} />
			</Routes>
		</Router>
	);
}

export default App;