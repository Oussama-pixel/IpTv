import React from 'react'
import './header.scss'
import {AiOutlineHome, AiOutlineInfoCircle} from 'react-icons/ai'
import {IoPricetagOutline} from 'react-icons/io5'
import {MdContactSupport} from 'react-icons/md'
import { useRef } from 'react'


export default function Header() {
    const linksRef = useRef([])
    const headerRef = useRef()
    const selectHandler = e=>{
        linksRef.current.map(item=>item.classList.remove("selected"))
        e.target.classList.add("selected")
    }
    window.addEventListener("scroll",(()=>{
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            headerRef.current.classList.add("scrolled")
          } else {
            headerRef.current.classList.remove("scrolled")
        }
    }))
  return (
    <div className="header" ref={ref=>ref!==null&&(headerRef.current = ref)}>
        <div className="logo">
            <img src="./images/logo.png" alt="" />
        </div>
        <div className="links">
            <p className='selected' ref={ref=>ref!==null&&(linksRef.current.push(ref))} onClick={e=>selectHandler(e)}>
                <AiOutlineHome/>
                Home
            </p>
            <p ref={ref=>ref!==null&&(linksRef.current.push(ref))} onClick={e=>selectHandler(e)}>
                <IoPricetagOutline/>
                IPTV Plans
            </p>
            <p ref={ref=>ref!==null&&(linksRef.current.push(ref))} onClick={e=>selectHandler(e)}>
                <AiOutlineInfoCircle/>
                Contact Us
            </p>
            <p ref={ref=>ref!==null&&(linksRef.current.push(ref))} onClick={e=>selectHandler(e)}>
                <MdContactSupport/>
                About Us
            </p>
        </div>
    </div>
  )
}
