import React from 'react'
import data from '../Object'
import PhoneComp from "./PhoneComp"

export default function Phone({addToCart}) {
  console.log(Object)
  let phoneData = data.filter(ele => ele.type == "phone")

  return (
    <>
    <PhoneComp data={{phoneData,addToCart}} />
    </>
  )
}
