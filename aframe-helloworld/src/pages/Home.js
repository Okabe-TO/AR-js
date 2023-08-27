import { Link } from "react-router-dom";
import './Home.css';

function Home() {
	return (
		<div className="App">
			<h1>Welcome to the AR Playground</h1>
			<div className="navi-button">
				<Link to="/aframe" className="nav-button">
					Go to A-Frame Page
				</Link>
				<Link to="/aframe-react" className="nav-button">
					Go to A-Frame React Page
				</Link>
				<Link to="/aframe-ar" className="nav-button">
					Go to A-Frame AR Page
				</Link>
			</div>
		</div>
	);
}

export default Home;