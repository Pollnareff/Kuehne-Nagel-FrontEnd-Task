import React from 'react'
import { useLocation } from "react-router-dom"

const More = () => {
    const {state} = useLocation();
    const { TrackingNumber, Status, OrderNumber, Date, Customer, Consignee} = state;
  return (
    <div className="px-10 py-15 h-screen flex flex-col flex-grow">
    <div className="text-6xl font-700 text-center">Shipment Details</div>

        <div className="w-full h-full grid grid-cols-2 p-50">
            <div className="mx-10 text-lg font-700">
                TRACKING NUMBER
            <div className="text-xl !opacity-100 font-600 border-4 bg-gray-500/10 p-3 align-middle">{TrackingNumber}</div>
            </div>
            <div className="mx-10 text-lg font-700">
                STATUS
            <div className="text-xl !opacity-100 font-600 border-4 bg-gray-500/10 p-3 align-middle">{Status}</div>
            </div>
            <div className="mx-10 text-lg font-700">
                ORDER NUMBER
            <div className="text-xl !opacity-100 font-600 border-4 bg-gray-500/10 p-3 align-middle">{OrderNumber}</div>
            </div>
            <div className="mx-10 text-lg font-700">
                DELIVERY DATE
            <div className="text-xl !opacity-100 font-600 border-4 bg-gray-500/10 p-3 align-middle">{Date}</div>
            </div>
            <div className="mx-10 text-lg font-700">
                CUSTOMER
            <div className="text-xl !opacity-100 font-600 border-4 bg-gray-500/10 p-3 align-middle">{Customer}</div>
            </div>
            <div className="mx-10 text-lg font-700">
                CONSIGNEE
            <div className="text-xl !opacity-100 font-600 border-4 bg-gray-500/10 p-3 align-middle">{Consignee}</div>
            </div>
        </div>
    </div>
  )
}

export default More