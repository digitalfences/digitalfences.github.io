import React from 'react';
import Button from '.././Button/Button.js';
import Check from './Check.js';
import './Form.css';

const Form = (props) => {
    Form.defaultProps = {
        label: "",
        placeholder: props.label
    }
    let classList = '';
    const submitHandler=(event) =>{
        event.preventDefault();
        let fieldValue = event.currentTarget.querySelector('input').value;
    }
    const clickHandler= (event) =>{
        event.target.setAttribute("placeholder","");
    }
    const numberChanger = (event) =>{
        let number = event.target.parentElement.querySelector("input")
        if(event.target.innerText === '+'){
            let increment = number.value++;
            number.setAttribute('value',`${increment}`)
        }
        else if (event.target.innerText === '-'){
            let decrement = number.value--;
            number.setAttribute('value',`${decrement}`)
        }
        else
            return
    }
    /** Size determinant */
    if (props.small) {
        classList += ` small`;
    }
    if (props.medium) {
        classList += ` medium`;
    }
    if (props.large) {
        classList += ` large`;
    }
    if(props.filled){
        classList += ` filled`;
    }

    if(props.type === 'select'){

        return <div>
        <select onClick={clickHandler} 
        className ={classList}>
            <option>{props.placeholder}</option>
        </select></div>
    }
    if(props.type === 'number'){
        classList += ` number-form`;
        return(
        <div className={classList}>
            <button id="inc-button" onClick={numberChanger} label="-">-</button>
            <input type="number" defaultValue="0" min="0" max="100"/>
            <button id="dec-button" onClick={numberChanger} label="+">+</button>
       </div>)
    }
    if(props.type === 'textButton'){
        return(
            <form className={"flex"+classList} onSubmit={submitHandler}>
                <input id="textButtonField" type='text' className ={classList} onClick={clickHandler} placeholder={props.placeholder}></input>
                <Button className={classList} id="textButton" type={props.buttonType} label={props.label} />
            </form>
        )
    }
    if(props.type === 'checkBox'){
       return(
           <div className={classList}>
               <Check type={props.type} color={props.color} label={props.label}></Check>
           </div>
       ) 
    }
    let label ='';

    if(props.label){
        label = 
            <span key={'1'}>{props.label}<br></br></span>
    }
    
    label =[label];
    return(
        <div >{label}<input className={classList} onClick={clickHandler} type="text" placeholder={props.placeholder}></input></div>
    )
}

export default Form