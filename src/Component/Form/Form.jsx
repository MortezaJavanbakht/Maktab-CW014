import Input from '../Input/Input'
import Button from '../Button/Button'
import {useState} from "react";
import './Form.css'
const Form = ()=> {
    return(
    <div className='form'>
        <Input Type='email' Name='Email'/>
        <Input Type='text' Name='Name'/>
        <Input Type='text' Name='Address'/>
        <Button name='Checkout' func={()=>alert('Ordered')}/>
    </div >
    )
}
export default Form;