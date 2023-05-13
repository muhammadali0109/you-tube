import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import "../Header/Header.css"
import { useState } from 'react'
// import Register from '../Register/Register'


const Home = () => {
  const [color , setColor] = useState(false);
  const handleChange = ()=>{
  setColor(!color)
  } 
  return (
    <div className={color ? 'app-js' : 'white'}>
      <Header/>
      {/* <Register/> */}
    </div>


  )
}

export default Home