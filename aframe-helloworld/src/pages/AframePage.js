//import 'aframe';
import React, { useEffect } from 'react';

function AframePage() {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = "https://aframe.io/releases/1.3.0/aframe.min.js";
		document.head.appendChild(script);

		return () => {
			document.head.removeChild(script);
		};
	}, []);

	return (
		<div className="App">
			<a-scene>
				<a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
				<a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
				<a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
				<a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
				<a-sky color="#ECECEC"></a-sky>
			</a-scene>
		</div>
	);
}

export default AframePage;