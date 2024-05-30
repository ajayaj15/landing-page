import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Card from './container/Card'
import Header from './container/Header'
import Footer from './container/Footer'
import Navbar from './container/Navbar'
 



function App() {


  return (
    <>
      <div>
      <Navbar/>
      <Header/>
      <Card/>
      <Footer/>
        
      </div>
      
    </>
  )
}

export default App
