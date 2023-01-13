import './CartItem.css';
const CartItem = ({imgAddress,title,price,number}) => {
    return(
        <div className='cart-Item'>
            <div style={{width:'15%',height:'100%'}}>
                <img src={imgAddress} width='100%' height='100%' alt='#' />
            </div>
            <div>
                <h3>{'this is ture'}</h3>
                <div style={{display:"flex",flexDirection:'row',gap:'0.5rem'}}>
                    <p>{`${price} * ${number}`}</p>
                    <button>Remove</button>
                </div>

            </div>
        </div>
    )
}

export  default  CartItem;