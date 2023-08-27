//import React, { useEffect } from 'react';

function AframeArPage() {

	return (
		<div className="App">
			<a-scene vr-mode-ui='enabled: false' arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false' renderer='antialias: true; alpha: true'>
				<a-camera gps-new-camera='gpsMinDistance: 5'></a-camera>
				{/* 以下の行で緯度と経度を実際の値に置き換えてください */}
				<a-entity material='color: red' geometry='primitive: box' gps-new-entity-place="latitude: 34.8260793; longitude: 135.5714664" scale="10 10 10"></a-entity>
			</a-scene>
		</div>
	);
}

export default AframeArPage;
