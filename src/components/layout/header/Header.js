import React, { useEffect,useRef, useState } from 'react'
import './Header.css'
import LogoImg from 'assets/images/logo.png'
import {Button} from 'components/ui'
const  Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  const isMount = useRef(false)

  useEffect(()=>{
    if (!isMount.current){


      if(window.scrollY > 60){
        setIsScrolled(true)
      }

      window.addEventListener('scroll',()=>{
          if(window.scrollY > 60){
            setIsScrolled(true)
          }
          else {
            setIsScrolled(false)
          }
        })


      isMount.current = true;

    }
  },[])



  
  return (
    <header className={` header ${isScrolled ? 'scrolled' : ''} `}>
      <div className='container'>
        <div className='header_row'>

          {/* brand */}
          <div className='header_brand'>
              <div className='logo'>
                <img src={LogoImg} alt='brand logo'/>
              </div>
           
          <h1>Budget App</h1>
          </div>
        
          {/* action */}
          <div className='header_action'>
             <div className='header_action-add'>
                <Button>+</Button>
            </div>
          </div>
          </div>
        
      </div>
    </header>
  )
}

export default Header