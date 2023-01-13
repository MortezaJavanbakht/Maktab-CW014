import React,{useState} from 'react'
import "./Card.css"
import Button from '../Button/Button'
import ProductSpec from "../productSpec/ProductSpec";

export default function Card({title,img,price,description}) {
    const [showModal,setShowModal] = useState(false);
  return (
    <div className='main-card'>
        <img src={img} alt="" onClick={()=>
        {
            setShowModal(true)

        }
        }/>
        <h2 className='title'>{title}</h2>
        <div className='price-add'>
        <span className='price'>${price}</span>
        <Button name="Add To Cart" />
            <ProductSpec title={title} img={img} price={price} description={description} Show={showModal}
                         Func={()=>setShowModal(false)}/>
        </div>

    </div>
  )
}
