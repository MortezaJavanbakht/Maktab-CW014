import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Products from "./Component/Products/Products";
import Footer from "./Component/Footer/Footer";
import Form from "./Component/Form/Form";

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
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
