import React from 'react'
import "./plan.scss"
import {BsCurrencyEuro} from 'react-icons/bs'

export default function Plan({price,duration,description,change}) {
  const selectPlan = (key)=>{
    change(key);
  }
  return (
    <div className='plan' >
      <div className="plan-header">
         <h1>
            {duration+" Month"+(duration>=2?"s":"")}
         </h1>
         <span>
            IPTV
         </span>
        <div className="plan-price">
          <BsCurrencyEuro/>
          <h2>
            {price}
          </h2>
          <span>
            {"/"+duration+"Month"+(duration>=2?"s":"")}
          </span>
        </div>
      </div>
      <div className="plan-info">
        {
          description.split("\n").map(item=><p>{item}</p>)
        }
        <div className="plan-buy">
          <p className="buy" onClick={()=>selectPlan(duration)}>
            Buy Now
          </p>
          <p>
            <BsCurrencyEuro/> {price}
          </p>
        </div>
      </div>
    </div>
  )
}
