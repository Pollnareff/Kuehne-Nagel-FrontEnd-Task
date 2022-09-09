import React from 'react'

const Button = ({text}) => {
  return (
    <div style={{fontFamily: 'Inter'}} className="text-3xl text-sidebarFont font-600 tracking-wider cursor-pointer border-b-4 opacity-50 hover:border-underline hover:opacity-100 select-none">{text}</div>
  )
}

export default Button