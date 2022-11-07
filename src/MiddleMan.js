import React from "react"
import IndyCounterDiv from "./IndyCounterDiv.js"
//q4e the prop required counter.counter, every 'attribute' in a prop is a key on the props object
export default function MiddleMan({ counter }) {
	return (
		<>
			<IndyCounterDiv counter={counter} />
			<IndyCounterDiv counter={counter + 1} />
			<IndyCounterDiv counter={counter + 2} />
			<IndyCounterDiv counter={counter + 3} />
			<IndyCounterDiv counter={counter + 4} />
		</>
	)
}
