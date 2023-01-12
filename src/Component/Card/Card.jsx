import React from 'react'
import "./Card.css"
import Button from '../Button/Button'

export default function Card({title,img,price}) {
  return (
    <div className='main-card'>
        <img src={img} alt="" />
        <h2 className='title'>{title}</h2>
        <div className='price-add'>
        <span className='price'>${price}</span>
        <Button name="Add To Cart" />
        </div>
    </div>
  )
}
