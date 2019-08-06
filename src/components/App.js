import React from 'react';

import { useSpring, animated } from 'react-spring';

import Navbar from './Navbar';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px, ${(y / 100) * -1}px,0)`
const trans2 = (x, y) => `translate3d(${(x / 12) * -1}px,   ${y / 18}px,0)`
const trans3 = (x, y) => `translate3d(${(x / 6) * -1}px,   ${y / 40}px,0)`
const trans4 = (x, y) => `translate3d(${(x / 80) * -1}px,  ${y / 90}px,0)`
const trans5 = (x, y) => `translate3d(${(x / 8) * -1}px,  ${y / 20}px,0)`

function App() {
	const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 100, tension: 550, friction: 440 } }))
	
	return (
		<div className="Homepage">
			<Navbar />

			<div className="parallax-container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
				{/* background */}
				<animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />

				{/* planets */}
				<animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />

				{/* whisps */}
				<animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />

				{/* person */}
				<animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />

				{/* glitter */}
				<animated.div className="card5" style={{ transform: props.xy.interpolate(trans5) }} />
			</div>
		</div>
	)
}

export default App;
