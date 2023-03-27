import React from 'react'
import './Button.css'
const  Button = ({children, type='primary',size = 'normal',icon = false,block = false, ...props}) => {
  return (

    // type: primary success error;
    
    //size: small , normal , large;
    <button className={`btn btn-${type} btn-${size} ${icon ? 'btn-icon': ''} ${block ? 'btn-block' : ''}`}{...props}>
        {children}
    </button>
  )
}

export default Button