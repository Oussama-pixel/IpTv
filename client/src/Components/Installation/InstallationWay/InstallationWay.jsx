import React, { useState } from 'react'
import "./installationWay.scss"
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

export default function InstallationWay({title,info,height}) {
    const [showInfo, setShowInfo] = useState(false)
  return (
    <div className={`installation-way  ${showInfo&&"show"}`} style={{height:showInfo?height:"20px"}}>
        <div className={`installation-way-header  ${showInfo&&"blue"}`}  onClick={()=>setShowInfo(!showInfo)}>
            <h3>
                {title}
            </h3>
            {
                showInfo?(
                    <AiOutlineMinus/>
                    ):(
                        <AiOutlinePlus/>
                )
            }
        </div>
        <div className="installation-way-info">
            {info}
        </div>
    </div>
  )
}
