//next step will be to add an intermediary div that will populate full of 'IndyCounterDiv'
//---- eventually with different number modifications
import React, { useState, useRef } from "react"
import MiddleMan from "./MiddleMan"
import InputSet from "./input-set"
function App() {
	let ref = useRef()
	let [counter, setCounter] = useState(0)
	//will reduce counter by 1

	let handleMinusButton = (e) => {
		setCounter(counter - 1)
	}
	// will increase counter by 1
	let handlePlusButton = (e) => {
		setCounter(counter + 1)
	}
	let handleSetButton = (e) => {
		setCounter(counter)
	}

	return (
		<>
			<button onClick={handleMinusButton}>-</button>
			<span ref={ref}>{counter}</span>
			<button onClick={handlePlusButton}>+</button>
			<MiddleMan counter={counter} />
			<InputSet />
		</>
	)
}
export default App

//you will need to use a prop on InputSet that is a callback
