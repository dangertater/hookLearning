//next step will be to add an intermediary div that will populate full of 'IndyCounterDiv'
//---- with different number productions
import React, { useState, useRef } from "react"
import MiddleMan from "./MiddleMan"
//TODO delete next line, testing if leaving this imported will donk shit up
import IndyCounterDiv from "./IndyCounterDiv"
//current problem,
function App() {
	let ref = useRef()
	let [counter, setCounter] = useState(0)
	//will reduce counter by 1
	//we would use a callback like below, in order to have the minus button subtract the latest value
	//----aka this will minus 7 per button press, where as without callbacks would just minus 7
	//----aka callbacks are used to get most recent values
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
			<IndyCounterDiv counter={counter} />
		</>
	)
}

export default App
