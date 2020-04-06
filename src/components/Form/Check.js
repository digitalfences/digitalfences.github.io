import React from 'react';
import './Check.css';

const Check = (props) => {
    let classList= '';
    const clickHandler= (event) =>{
    }
    if (props.color === 'black'){
        classList += 'black'
    }
    if (props.color === 'blue'){
        classList += 'blue'
    }
    return(
        <label id="checkLabel" className={classList}>
        <input type="checkbox"></input>
        <span className='custom'></span>
        <span className='customLabel'>{props.label}</span>
        </label>
    )
}

export default Check