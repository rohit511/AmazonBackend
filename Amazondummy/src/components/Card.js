import React from 'react';
import './Card.css'
import data from './Object'
export default function Card({inputState}) {
    let filteredData = data.filter(ele=>ele.type.includes(inputState.inputState.toLowerCase()))

    return (
        <>

        
            <div className="container">
                {
                    filteredData.length == 0 ?


                        data.map((ele) => {
                            return (

                                // <div className="big-container">
                                <div className="card-container">
                                    <div className="image-container">
                                        {/* <img src="/earphones.jpg" alt="" /> */}
                                        <img src={`${ele.image}`} />
                                    </div>

                                    <div className="Details">
                                        <div className="title">{ele.title}</div>
                                        <div className="price31">RS. {ele.price}</div>

                                        <div className="quantity">{ele.quantity} </div>
                                        <button onClick={()=>inputState.addToCart(ele)}>Add to cart</button>
                                    </div>


                                </div>

                            )


                        })



                        : filteredData.map((ele) => {
                            return (
                                <div className="card-container">
                                    <div className="image-container">
                                        {/* <img src="/earphones.jpg" alt="" /> */}
                                        <img src={`${ele.image}`} />
                                    </div>

                                    <div className="Details">
                                        <div className="title">{ele.title}</div>
                                        <div className="price31">RS. {ele.price}</div>

                                        <div className="quantity">{ele.quantity} </div>
                                        <button onClick={()=>inputState.addToCart(ele)}>Add to cart</button>
                                    </div>


                                </div>
                            )




                        })






                }
            </div>
        </>


    )
}




