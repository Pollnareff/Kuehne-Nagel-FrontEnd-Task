import React, { useState, useEffect } from 'react'
import axios from 'axios'
import jsonData from '../Shipments.json'
import Pagination from './Pagination'
import ShipmentMap from './ShipmentMap'
import { useNavigate } from "react-router-dom"
import More from "./More"

const Shipments = () => {
  const [shipments, setShipments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [shipmentsPerPage] = useState(10);

  useEffect(() => {
    const fetchShipments = async () => {
      let res;
       res = await axios.get('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0').catch(err => {
        console.error(err.message)
        console.log("loading local json")
        //bad way to get data but it works i think
        res = JSON.parse(JSON.stringify(jsonData));
        setShipments(res);
      });
      setShipments(res.data);
    };

    fetchShipments();
  }, []);

  // pagination logic
  const indexOfLastShipment = currentPage * shipmentsPerPage;
  const indexOfFirstShipment = indexOfLastShipment - shipmentsPerPage;
  const currentShipments = shipments.slice(indexOfFirstShipment, indexOfLastShipment);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  // deletion logic
  const handleDelete = (shipmentId) => {
    const newShipments = [...shipments];

    const index = shipmentId

    newShipments.splice(index, 1);

    setShipments(newShipments);
    console.log("delete clicked, index -", index)
    console.log(shipments)
  }

  const navigate = useNavigate();
  const showMore = (orderNo, date, customer, consignee, trackingNo, status) => {
    // not the best way to get info for detailed view, but it works and i have little time left
    const OrderNumber = orderNo
    const Date = date
    const Customer = customer
    const Consignee = consignee
    const TrackingNumber = trackingNo
    const Status = status
    navigate("/shipment",  { state: { OrderNumber: orderNo, Date: date, Customer: customer, Consignee:consignee, TrackingNumber: trackingNo, Status:status} });
    console.log(OrderNumber, Date, Customer, Consignee, TrackingNumber, Status);
}

  return (
    <>
      <ShipmentMap showMore={showMore} currentPage={currentPage} shipments={currentShipments} handleDelete={handleDelete}/>
      <Pagination
        shipmentsPerPage={shipmentsPerPage}
        totalShipments={shipments.length}
        paginate={paginate}
      />
    </>
  );
}

export default Shipments;
