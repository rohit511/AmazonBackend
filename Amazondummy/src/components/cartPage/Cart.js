import React from 'react'
import "./Cart.css"




export default function Cart({ cart }) {
  return (
    <>
      <div className="parent11">
        {



          cart.cart.length == 0 ? <h1 style={{ color: "blue" }}>There is no product in cart...</h1> // <div>there is no product in cart</div>
            : cart.cart.map((ele) => {
              return (


                <div className='cart-container11'>
                  <div className='container11'>
                    <img src={ele.image} />
                  </div>
                  <div className='product-detail11'>
                    <div>Price</div>
                    <div> Rs.{ele.price}</div>
                  </div>
                  <div className='quantity-container11'>
                    <div>Quantity</div>
                    <button onClick={() => cart.addToCart(ele)}>+</button>
                    <div>Pcs {ele.quantity}</div>
                    <button onClick={() => cart.deleteToCart(ele)}>-</button>
                  </div>
                  <div className='delete11'>
                    <button onClick={() => cart.removeCart(ele)}>Delete from Cart</button>
                  </div>
                  <div className='total11'>
                    <div>Total Price</div>
                    <div>{ele.price * ele.quantity} </div>
                  </div>
                </div>



              )






            })







        }
      </div>













    </>
  )
}