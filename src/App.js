import React, { useState, useRef } from "react"

function App() {
	let ref = useRef()
	let counter = 0
	//will reduce counter by 1
	let handleMinusButton = () => {}
	//will increase counter by 1
	let handlePlussButton = () => {}

	return (
		<>
			<button onClick={handleMinusButton}>-</button>
			<span ref={ref}>{counter}</span>
			<button onClick={handlePlussButton}>+</button>
      <
		</>
	)
}

export default App
