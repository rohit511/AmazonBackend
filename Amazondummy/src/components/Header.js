import React from 'react';
import './Header.css'
import { Link } from "react-router-dom"


// import amgImg from"./TV FIRE STICK.jpg"

export default function Header({ setInputState }) {

    function manageInput(e) {
        let { value } = e.target
        console.log(value);
        setInputState.setInputState(value);
    }
    return (

        <>
            <div className="header3">

                <div className="header">
                    <div className="img-container">
                        <Link to="/"> <img src="./images/download.png" alt=""></img></Link>


                    </div>
                    <div className="content-container">

                        <div className="hellow">Hello</div>
                        <div className="adress">Select Your Adress</div>
                    </div>

                    <div className="search-parent">
                        <input type="text" placeholder="Search your product" onChange={manageInput} />
                    </div>
                    <div className="Subheaderi">
                        <Link to="/login"><div className="login" style={{color: "white", fontWeight: "bold",textDecoration:"none"}}>Login</div></Link>
                       <Link to="/sign"><div className="signup" style={{color: "white", fontWeight: "bold",textDecoration:"none"}}>Signup</div></Link>


                    </div>
                    <div className="cart-container99">
                        <div className="cart" style={{ color: "blue", fontWeight: "bold" ,textDecoration:"none"}}>
                        <Link to="/cartpage"><div className="rk" style ={{color:"white",fontWeight:"bold",textDecoration:"none"}}><h2>Cart</h2></div></Link>
                            <div className="box">{setInputState.cart.length}</div>
                        </div>
                    </div>
                   

                   
                    <div className="img-container14">
                    <Link to ="/cartpage"><img src="./images/cart-image.png" alt=""></img></Link>




                        </div>




                </div>









            </div>









        </>
    )
}