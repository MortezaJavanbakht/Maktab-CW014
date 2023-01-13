import React from 'react'
import "./Navbar.css"

export default function Navbar({list,SetList}) {
  return (
    <div className='nav-container'>
        <span>Products</span>
        <div>
            <label>Order</label>
            <select onChange={(e)=> {
                let array = [];
                if(e.target.value == 'Low'){
                    array = list.sort((a,b)=> a.price - b.price)
                    console.log(array)
                    SetList(array.slice(0,array.length))
                }else  {
                    array = list.sort((a,b)=> b.price - a.price)
                    console.log(array)
                    SetList(array.slice(0,array.length))
                }
            }
            }>
                <option value ="" hidden>Price</option>
                <option value="High">Highest</option>
                <option value="Low">Lowest</option>
            </select>
        </div>
        <div>
            <label>Filter</label>
            <select onChange={(e) => {
                let array = [];
                array = list.filter(items => items.size.includes(e.target.value))
                SetList(array.slice(0,array.length))
            }
            }>
                <option value="All">All</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
        </div>
    </div>
  )
}
