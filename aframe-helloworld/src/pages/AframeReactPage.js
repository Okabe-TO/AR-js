import { Entity, Scene } from 'aframe-react';

function AFrameReactPage() {
	return (
		<Scene>
			<Entity
				geometry={{ primitive: 'box' }}
				material={{ color: '#4CC3D9' }}
				position={{ x: -1, y: 0.5, z: -3 }}
				rotation={{ x: 0, y: 45, z: 0 }}
			/>
			<Entity
				geometry={{ primitive: 'sphere', radius: 1.25 }}
				material={{ color: '#EF2D5E' }}
				position={{ x: 0, y: 1.25, z: -5 }}
			/>
			<Entity
				geometry={{ primitive: 'cylinder', radius: 0.5, height: 1.5 }}
				material={{ color: '#FFC65D' }}
				position={{ x: 1, y: 0.75, z: -3 }}
			/>
			<Entity
				geometry={{ primitive: 'plane', width: 4, height: 4 }}
				material={{ color: '#7BC8A4' }}
				position={{ x: 0, y: 0, z: -4 }}
				rotation={{ x: -90, y: 0, z: 0 }}
			/>
			<Entity
				primitive="a-sky"
				color="#ECECEC"
			/>
		</Scene>
	);
}

export default AFrameReactPage;