import React from "react"
//this indy div will have return 'counter + 1' from App.js
export default function IndyCounterDiv(props) {
	return <div>{JSON.stringify(props.counter + 1)}</div>
}
