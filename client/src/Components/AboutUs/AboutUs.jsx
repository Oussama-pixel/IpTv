import React from 'react'
import "./aboutus.scss"

export default function AboutUs() {
  return (
    <div className='aboutus' id='aboutus'>
        <div className="bg-diagonal top">
          <img src="" alt="" />
        </div>
        <div className="aboutus-logo">
            <img src="/images/stream (1).png" alt="" />
        </div>
        <div className="aboutus-info">
            <pre>
                Welcome to GOSTREAM If you are looking for one of the most {"\n"} reliable IPTV streaming services, This is the right one for you! {"\n"} Experience the next generation of IPTV Streaming.{"\n"} Say goodbye to buffering, Our IPTV service is stable {"\n"} yet containing 10,000+ premium channels of any category you can imagine!
            </pre>
        </div>
        <div className='paypal'>
          <img src="/images/PayPal.png" alt="" />
        </div>
    </div>
  )
}
