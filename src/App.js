import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Products from "./Component/Products/Products";
import Footer from "./Component/Footer/Footer";
import Form from "./Component/Form/Form";
import CartItem from "./Component/CartItem/CartItem";
import Button from "./Component/Button/Button";

function App() {
  return (
    <>
      <Header />
      <div className="mainContainer">
        <div className="left-side">
          <Navbar />
          <Products />
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
