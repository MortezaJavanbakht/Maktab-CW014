import './Input.css';

const Input = (props) => {
    return(
        <div className='InpBox'>
            <label htmlFor={props.name}>
                {props.name.toString().toCapitalize()}
            </label>
            <input type={props.type} id={props.name}/>
        </div>
    )
}

export default Input;