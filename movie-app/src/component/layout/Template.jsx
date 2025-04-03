import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet} from "react-router-dom"
import "./layout.css"
const Template = () => {
  return (
    <div className='template-container'>
      <Header/>
      <div className="main-container">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Template
