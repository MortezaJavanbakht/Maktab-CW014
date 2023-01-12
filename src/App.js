import React from 'react';
import './App.css';
import Card from "./Component/Card/Card"

const products = [
  {id:1 , title:"Midi sundress with shirring detail" , img:"image/1.jpg",size:["XL","L"] , price:29.5 , description:"This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you."},
  {id:2 , title:"Midi sundress with ruched front" , img:"image/2.jpg",size:["XL","L"] , price:14 , description:"This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you."},
  {id:3 , title:"Midi dress in pink ditsy floral" , img:"image/3.jpg",size:["XL","L"] , price:25.8 , description:"This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you."},
  {id:4 , title:"cami maxi dress in polka dot" , img:"image/4.jpg",size:["XL","L"] , price:17.5 , description:"This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you."},
  {id:5 , title:"Frill mini dress in yellow polka dot" , img:"image/5.jpg",size:["XL","L"] , price:40 , description:"This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you."},
  {id:6 , title:"Midi tea dress in blue and red spot" , img:"image/6.jpg",size:["XL","L"] , price:35, description:"This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you."},
]

function App() {
  return (
<>
    <div className='card-container'>
    <Card {...products[0]} />
    </div>
</>

  );
}

export default App;
