import React from 'react'

export default function Banner1({children,title,subtitle}) {
    return (
        <div className="banner1">
            <h1>{title}</h1>
            <div></div>
            
            {children}        
        </div>
    )
}
