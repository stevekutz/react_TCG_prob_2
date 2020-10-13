import React from 'react'
import './validation_component.css'



const ValidationComp = (props) => {

	

	return (
		<div>
		{ (props.textLength < 5) ?
		
			<p className = 'short'> Text too short (must 5 char of more) </p>
		
		:
			<p className = 'longenough'> Text long enough </p>
		
		}

			<p> {props.textLength} </p>
		</div>
	
	
	)
}

export default ValidationComp