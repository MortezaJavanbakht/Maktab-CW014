import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='nav-container'>
        <span>Products</span>
        <div>
            <label>Order</label>
            <select value="">
                <option value="Q">Highest</option>
                <option value="z">Lowest</option>
            </select>
        </div>
        <div>
            <label>Filter</label>
            <select value="">
                <option value="A">All</option>
                <option value="B">XS</option>
                <option value="C">S</option>
                <option value="D">M</option>
                <option value="E">L</option>
                <option value="F">XL</option>
                <option value="G">XXL</option>
            </select>
        </div>
    </div>
  )
}
