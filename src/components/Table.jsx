import React from 'react'
import Shipments from "./Shipments"
const Table = () => {
  return (

    <div className="px-14 py-15 h-screen flex flex-col flex-grow">
    <div className="mb-15 text-6xl font-700 text-center">Shipments</div>

    <Shipments />
    </div>
  )
}

export default Table