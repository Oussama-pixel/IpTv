import React from 'react'
import Header from '../../Components/Header/Header'
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner'
import "./home.scss"

export default function Home() {
  return (
    <div className='home'>
        <Header/>
        <HeaderBanner/>
    </div>
  )
}
