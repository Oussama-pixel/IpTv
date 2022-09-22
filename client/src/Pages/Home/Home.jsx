import React from 'react'
import AboutUs from '../../Components/AboutUs/AboutUs'
import ContactUs from '../../Components/ContactUs/ContactUs'
import Description from '../../Components/Description/Description'
import Header from '../../Components/Header/Header'
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner'
import Installation from '../../Components/Installation/Installation'
import Plans from '../../Components/Plans/Plans'
import "./home.scss"

export default function Home() {
  return (
    <div className='home' id='home'>
        <Header/>
        <HeaderBanner/>
        <Description/>
        <Plans/>
        <ContactUs/>
        <Installation/>
        <AboutUs/>
    </div>
  )
}
