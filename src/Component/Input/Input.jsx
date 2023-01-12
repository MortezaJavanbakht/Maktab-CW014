import './Input.css';

const Input = (props) => {
    return(
        <div className='InpBox'>
            <label htmlFor={props.Name}>
                {props.Name}
            </label>
            <input type={props.Type} id={props.Name}/>
        </div>
    )
}

export default Input;