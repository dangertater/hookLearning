import React from "react"
import tooHighOrLow from "./TooHighOrLow.js"

export default function IndyCounterDiv(props) {
	if (tooHighOrLow(props.counter)) {
		return <div>one of your numbers is too dam high or low</div>
	} else {
		return <div>{JSON.stringify(props.counter)}</div>
	}
}

//the goal is to have the first div returned if TooHighOrLow is turthy
//----based on each individual number
//----aka the last IndyCounterDiv rendered is the highest, it should trigger TooHighOrTooLow
