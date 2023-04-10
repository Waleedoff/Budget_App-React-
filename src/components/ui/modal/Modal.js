import React from 'react'
import './Modal.css'
import ReactDOM from 'react-dom'

// do not use ReactDom.
const  Modal = ({visible,children,closeMode}) => {

    if (!visible){  //false...
        return null
    }
    
        return ReactDOM.createPortal( //true...
            

               <div className='modal-overlay' onClick={closeMode}>
                 <div className="modal" onClick={(e)=> e.stopPropagation()}>
                 {children}
                 </div>
                  </div>
                
               


           ,
           
            document.querySelector('#modal-root')
        )
    }



export default Modal 