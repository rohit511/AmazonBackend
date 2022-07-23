import React from 'react'
import "../Card.css"

export default function PhoneComp({data}) {
    console.log(data)
    return (

        <>
        <div className="container">
                {

                    data.phoneData.map((ele) => {
                        return (

                            // <div className="big-container">
                            <div className="card-container">
                                <div className="image-container">
                                    {/* <img src="/earphones.jpg" alt="" /> */}
                                    <img src={`${ele.image}`}/>
                                </div>

                                <div className="Details">
                                    <div className="title">{ele.title}</div>
                                    <div className="price31">RS. {ele.price}</div>

                                    <div className="quantity">{ele.quantity} </div>
                                    <button onClick={()=>data.addToCart(ele)}>Add to cart</button>
                                </div>


                            </div>

                        )


                    })




                }
            </div>
        
        
        </>
        
        
    )
}
