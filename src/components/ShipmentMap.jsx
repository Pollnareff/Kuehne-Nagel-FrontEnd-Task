import React from 'react'

const ShipmentMap = ({shipments, handleDelete, currentPage, showMore}) => {

  return (
    <table className="mx-10 mt-5 border-b-3 border-gray-200">
    <thead className="border-b-3 border-gray-200">
      <tr>
        <th className="p-2 text-lg opacity-75 font-700 tracking-wide text-left uppercase">orderNo</th>
        <th className="p-2 text-lg opacity-75 font-700 tracking-wide text-left uppercase">delivery</th>
        <th className="p-2 text-lg opacity-75 font-700 tracking-wide text-left uppercase">customer</th>
        <th className="p-2 text-lg opacity-75 font-700 tracking-wide text-left uppercase">consignee</th>
      </tr>
    </thead>
    <tbody>
      {
        shipments.map((shipment, id) =>
            <tr className="even:bg-sidebar" id-key={(currentPage-1)*10 + id} key={(currentPage-1)*10 + id}>
            <td className="p-2 py-3 text-base font-400 text-left">{shipment.orderNo}</td>
            <td className="p-2 py-3 text-base font-400 text-left">{shipment.date}</td>
            <td className="p-2 py-3 text-base font-400 text-left overflow-ellipsis">{shipment.customer}</td>
            <td className="p-2 py-3 text-base font-400 text-left overflow-ellipsis">{shipment.consignee}</td>
            <td><button className="py-2 px-4 hover:bg-blue-500 font-700 select-none" onClick={() => {showMore(shipment.orderNo, shipment.date, shipment.customer, shipment.consignee, shipment.trackingNo, shipment.status)}}>More</button></td>
            <td><button className="py-2 px-4 hover:bg-red-500 font-700 select-none" onClick={() => {handleDelete((currentPage-1)*10 + id)}}>Delete</button></td>
          </tr>
          )
      }
  </tbody>
</table>
  )
}

export default ShipmentMap