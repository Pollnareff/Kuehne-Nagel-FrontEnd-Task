import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="bg-sidebar right-0 h-screen flex flex-col px-14 py-20">
      <a target="_blank" href="https://home.kuehne-nagel.com/"><img className="w-18rem cursor-pointer select-none" src="src\img\kuehne-nagel-logo-blue.png"></img></a>
      <div className="mt-6em"></div>
      <Link to="/"><Button text="Shipments" /></Link>
      <div className="pb-3rem"></div>
      <Link to="about"><Button text="About" /></Link>
    </div>
  )
}

export default Sidebar