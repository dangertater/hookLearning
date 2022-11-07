import React from "react"
import IndyCounterDiv from "./IndyCounterDiv.js"
//q4e the prop required counter.counter, every 'attribute' in a prop is a key on the props object
export default function MiddleMan(props) {
	return (
		<>
			<IndyCounterDiv counter={props.props} />
			<IndyCounterDiv counter={props.props + 1} />
			<IndyCounterDiv counter={props.props + 2} />
			<IndyCounterDiv counter={props.props + 3} />
			<IndyCounterDiv counter={props.props + 4} />
		</>
	)
}
