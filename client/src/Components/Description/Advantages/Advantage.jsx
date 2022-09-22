import React from 'react'
import "./advantage.scss"

export default function Advantage({icon,title,description}) {
  return (
    <div className='advantage'>
        {icon}

        <h2>
            {title}
        </h2>
        
        {
          description.split("\n").map(item=><p>{item}</p>)
        }
    </div>
  )
}
