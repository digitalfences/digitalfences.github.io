import React from 'react';
import './Button.css';
import Icon from '.././Icon/Icon.js';

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {

    // Declare a classList variable and set it to an empty string
    let classList = props.className;

    // Create an array of all of the story/component types you want to be
    // included in your component library
    let types = ['primary', 'danger', 'success', 'warning','default']

    // Add a conditional statement that checks for the type and updates the 
    // classList variable based on their existence.
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`;
    }

    // Add another conditional statement to check for additional properties (such as large)
    // and add to the classList variable based on this condition evaluating to true
    if (props.large) {
        classList += ` button-large`;
    }
    if (props.outline) {
        classList += ` button-outline`;
    }
    if (props.lightFill) {
        classList += ` button-light-fill`;
    }
    if (props.carticon){
        classList += ` icon cart`;
        return (<button className={classList} onClick={props.onClick}><Icon type="cart"/><p id="label-text">{props.label}</p></button>)
    }
    if (props.hearticon){
        classList += ` icon heart`;
        return(<button className={classList} onClick={props.onClick}><Icon type="heart"/><p id="label-text">{props.label}</p></button>)
    }

    return <button id={props.id} className={classList} onClick={props.onClick}><p id="label-text">{props.label}</p></button>
}


export default Button; 