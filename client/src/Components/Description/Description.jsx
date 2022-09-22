import React from 'react'
import Advantage from './Advantages/Advantage'
import "./description.scss"
import {BsClock, BsGiftFill, BsUpload} from 'react-icons/bs'
import {RiComputerLine} from 'react-icons/ri'
import {GoSettings} from 'react-icons/go'
import {ImHeadphones} from 'react-icons/im'

export default function Description() {
  return (
    <div className='description' id='whyus'>
        <Advantage icon={<BsClock/>} title={"Instant Activation!"} description={"A few moments after your order the service \n will be ready and you get full access to all \n features."} />
        <Advantage  icon={<RiComputerLine/>} title={"60,000+ TV & VODs"} description={"Get full access to over 60,000 TV Channels \n and Video, never miss any of your favorite \n TV Shows or Sport Games."}/>
        <Advantage  icon={<GoSettings/>} title={"Multiple Format!"} description={"You can order the service according your \n device or app. We suggest M3U, MAG and \n  Enigma Formats."}/>
        <Advantage  icon={<ImHeadphones/>} title={"Fast Support"} description={"We have provide different contact method. \n So you can contact us any time. Join live chat \n or leave a message. We will contact you as \n soon as possible."}/>
        <Advantage  icon={<BsUpload/>} title={"Auto and free update"} description={"We usually update and add new TV \n Channels and VODs to the service. Once you subscribe you \n will receive any update for \n free during your service."}/>
        <Advantage  icon={<BsGiftFill/>} title={"Trial Test"} description={"Every users can receive one free account for \n 24 hours to check our quality. Just contact \n us for a free trial account. No payment or \n sign up needed."}/>
    </div>
  )
}
