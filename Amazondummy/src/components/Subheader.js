import React from 'react'
import "./Subheader.css"
import {Link} from "react-router-dom"


export default function subheader() {
  return (
      <>
      <div className="Subheader">
    {/* <div className="subheader">subheader</div> */}
    <Link to="/"><div className="all">All</div></Link>
   <Link to="/watch" style={{textDecoration:"none"}}> <div className="watch">Watch</div></Link>
    

    <Link to="/phone" style={{textDecoration:"none"}}><div className="phone">Phone</div></Link>
    <Link to="/earphone" style={{textDecoration:"none"}}><div className="earphone">Earphone</div></Link>
    </div>



    </>
  )
}
// export default subheader;