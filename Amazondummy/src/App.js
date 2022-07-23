import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


import Login from"../src/components/Login"
import Card from "./components/Card"
import Phone from "./components/SubheaderOption/Phone"
import Earphone from "./components/SubheaderOption/Earphone"
import Watch from "./components/SubheaderOption/Watch"
import Subheader from "./components/Subheader"
import Header from "./components/Header"
import Cart from "./components/cartPage/Cart"
import Sign from "../src/components/Sign"
function App() {
  let [inputState, setInputState] = useState('sample');
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    console.log("clicked on cart", product);
    //now using wheter product exit in cart or not
    const productinCart = cart.find((ele) => ele.id === product.id);
    if (productinCart) {
      if(productinCart.quantity < productinCart.totalquantity){
      setCart(cart.map((ele) => ele.id === product.id ? { ...productinCart, quantity: productinCart.quantity + 1 } : ele));
      }
    }
    else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }
  function deleteToCart(product){
    const productinCarttoDelete = cart.find((ele)=> ele.id=== product.id);
    console.log(productinCarttoDelete);
    if(productinCarttoDelete.quantity===1){
    setCart(cart => cart.filter(ele => {return ele.id !== productinCarttoDelete.id}))
    }else{
      setCart(cart.map((ele)=> ele.id === product.id ? { ...productinCarttoDelete, quantity: productinCarttoDelete.quantity-1}: ele ))
    }
  }
  function removeCart(product) {
    setCart(cart.filter(ele=>ele.id!=product.id))
  }

  return (

    <>
      <BrowserRouter>
        <Header setInputState={{ setInputState, cart }} />
        <Subheader />
        <Routes>
          <Route path="/" element={<Card inputState={{ inputState, addToCart }} />} />
          <Route path="/card" element={<Card  />} />
          <Route path="/phone" element={<Phone addToCart={addToCart}/>} />
          <Route path="/watch" element={<Watch addToCart={addToCart}/>} />
          <Route path="/earphone" element={<Earphone addToCart={addToCart}/>} />
          <Route path="/cartpage" element={<Cart cart={{ cart, addToCart,removeCart,deleteToCart }} />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign" element={<Sign/>}/>

        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;
