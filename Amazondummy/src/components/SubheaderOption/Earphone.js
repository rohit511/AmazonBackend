import React from 'react'
import data from '../Object'
import EarphoneComp from "./EarphoneComp"

export default function Earphone({addToCart}) {
  console.log(Object)
  let earphoneData = data.filter(ele => ele.type == "earphone")

  return (
    <>
    <EarphoneComp data={{earphoneData,addToCart}} />
    </>
  )
}
