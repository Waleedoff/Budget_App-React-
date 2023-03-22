import React from 'react'
import Header from '../components/layout/header/Header'
function MainLayout(props) {
  return (
    <>
        <Header/>
        <main>
            {props.children}
        </main>
    </>
  )
}

export default MainLayout