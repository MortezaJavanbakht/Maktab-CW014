import React from 'react'
import "./Button.css"


export default function Button({name , func}) {
  return (
    <button className="Btn" onClick={func}>{name}</button>
  )
}
