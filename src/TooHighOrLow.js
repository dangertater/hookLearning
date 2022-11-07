import React from "react"

export default function TooHighOrLow(props) {
	if (props.val >= 10 || props.val <= -10) return true
	else {
		return false
	}
}
