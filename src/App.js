//next step will be to add an intermediary div that will populate full of 'IndyCounterDiv'
//---- eventually with different number modifications
import React, { useState, useRef } from "react"
import MiddleMan from "./MiddleMan"
import TooHighOrLow from "./TooHighOrLow"
function App() {
	let ref = useRef()
	let [counter, setCounter] = useState(0)
	//will reduce counter by 1
	//q4e, why is this e here necessary? I found it being a 'synthetic event' and that it retrieves
	//----the value of the (target?)element, but the buttons don't have relevant values...so porque?
	//----works the same without the e?
	let handleMinusButton = (e) => {
		setCounter(counter - 1)
	}
	// will increase counter by 1
	let handlePlusButton = (e) => {
		setCounter(counter + 1)
	}

	return (
		<>
			<button onClick={handleMinusButton}>-</button>
			<span ref={ref}>{counter}</span>
			<button onClick={handlePlusButton}>+</button>
			<MiddleMan props={counter} />
			<TooHighOrLow props={counter} />
		</>
	)
}
export default App
