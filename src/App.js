import React ,{useState} from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Form from "./Component/Form/Form";
import CartItem from "./Component/CartItem/CartItem";
import Button from "./Component/Button/Button";
import Card from "./Component/Card/Card";
import ProductSpec from "./Component/productSpec/ProductSpec";


const productsArr = [
    {id:1 , title:"Midi sundress with shirring detail" , img:"image/1.jpg",size:["S","L"] , price:29.5 , description:"This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you."},
    {id:2 , title:"Midi sundress with ruched front" , img:"image/2.jpg",size:["XL","L"] , price:14 , description:"This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you."},
    {id:3 , title:"Midi dress in pink ditsy floral" , img:"image/3.jpg",size:["M","L"] , price:25.8 , description:"This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you."},
    {id:4 , title:"cami maxi dress in polka dot" , img:"image/4.jpg",size:["XL","L"] , price:17.5 , description:"This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you."},
    {id:5 , title:"Frill mini dress in yellow polka dot" , img:"image/5.jpg",size:["XL","L"] , price:40 , description:"This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you."},
    {id:6 , title:"Midi tea dress in blue and red spot" , img:"image/6.jpg",size:["XL","L"] , price:35, description:"This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you."},
]

function App() {
    const [products,setProducts] = useState(productsArr)
    return (
    <>
      <Header />
      <div className="mainContainer">
        <div className="left-side">
          <Navbar list={productsArr} SetList={setProducts} />
            <div className='card-container'>
                {products.map(item=>
                    <Card
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        price={item.price}
                        description={item.description} />

                )}
            </div>
        </div>
        <div className="right-side">
            <div className='cart-Box'>
                <div className='title'>
                    {'Cart is Empty'}
                </div>
                <div style={{width:'100%'}}>
                    <CartItem key={crypto.randomUUID()}/>
                </div>
                <div style={{display:"flex",justifyContent:'space-around' }}>
                    <h5>{`Total is: 0`}</h5>
                    <Button name='Proceed'/>
                </div>
            </div>
            <Form />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
