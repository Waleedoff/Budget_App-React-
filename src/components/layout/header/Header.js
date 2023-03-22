import React from 'react'
import './Header.css'


import LogoImg from 'assets/images/logo.png'



function Header() {
  return (
    <header className='header scrolled'>
      <div className='container'>
        <div className='header_row'>

          
          <div className='header_brand'>
              <div className='logo'>
                <img src={LogoImg} alt='brand logo'/>
              </div>
           
          <h1>Budget App</h1>
          </div>
        

          <div className='header_action'>
            <div className='header_action-add'>
                <button>+</button>
            </div>
          </div>
          </div>
        
      </div>
    </header>
  )
}

export default Header