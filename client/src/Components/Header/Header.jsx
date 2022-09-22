import React from 'react'
import './header.scss'
import {AiFillHome, AiFillPhone, AiOutlineQuestion} from 'react-icons/ai'
import {IoPricetag} from 'react-icons/io5'
import {MdContactSupport} from 'react-icons/md'
import { useRef } from 'react'
import { BsCpu } from 'react-icons/bs'


export default function Header() {
    const linksRef = useRef([])
    const headerRef = useRef()
    const selectHandler = e=>{
        linksRef.current.map(item=>item.classList.remove("selected"))
        e.target.classList.add("selected")
    }
    window.addEventListener("scroll",(()=>{
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            headerRef.current?.classList.add("scrolled")
          } else {
            headerRef.current?.classList.remove("scrolled")
        }
    }))
  return (
    <div className="header" ref={ref=>ref!==null&&(headerRef.current = ref)}>
        <a href="#home"onClick={()=>linksRef.current[0].click()}>
            <div className="logo">
                <img src="./images/stream (1).png" alt="" />
            </div>
        </a>
        <div className="links">
            <a href="#home">
                <p className='selected' ref={ref=>ref!==null&&(linksRef.current.push(ref))} onClick={e=>selectHandler(e)}>
                    <AiFillHome/>
                    Home
                </p>
            </a>
            <a href="#whyus">
                <p ref={ref=>ref!==null&&(linksRef.current.push(ref))} onClick={e=>selectHandler(e)}>
                    <AiOutlineQuestion/>
                    Why Us
                </p>
            </a>
            <a href="#plans">
                <p ref={ref=>ref!==null&&(linksRef.current.push(ref))} onClick={e=>selectHandler(e)}>
                    <IoPricetag/>
                    IPTV Plans
                </p>
            </a>
            <a href="#installation">
                <p ref={ref=>ref!==null&&(linksRef.current.push(ref))} onClick={e=>selectHandler(e)}>
                    <BsCpu/>
                    Installation
                </p>
            </a>
            <a href="#contact-us">
                <p ref={ref=>ref!==null&&(linksRef.current.push(ref))} onClick={e=>selectHandler(e)}>
                    <AiFillPhone/>
                    Contact Us
                </p>
            </a>
            <a href="#aboutus">
                <p ref={ref=>ref!==null&&(linksRef.current.push(ref))} onClick={e=>selectHandler(e)}>
                    <MdContactSupport/>
                    About Us
                </p>
            </a>
        </div>
    </div>
  )
}
