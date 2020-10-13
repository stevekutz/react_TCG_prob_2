import React from 'react';
import './char_component.css'


const CharComponent = (props) => {
    
    return (
        <div 
            className = 'list'
            onClick = {props.deleteCharHandler}
        
        >
            <div> {props.current_char} </div>
            <div> char index: {props.index_val}</div>
        </div>
    )


}


export default CharComponent