import React from 'react'
import data from '../Object'
import WatchComp from "./WatchComp"

export default function Watch({addToCart}) {
console.log(Object)
  let watchData=data.filter(ele=>ele.type=="watch")
  
    return (
     <WatchComp data={{watchData,addToCart}}/>
   
  )
}
