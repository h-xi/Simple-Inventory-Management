import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';




function GetIncomingOrderPage() {

    const [Order_ID, setOrder_ID] = useState(0);
    const [ShipmentDate, setShipmentDate] = useState("");
    const [Quantity, setQuantity] = useState(0);
    const [AssignedReceiver, setAssignedReceiver] = useState(0);
    const [Inventory_Barcode, setInventory_Barcode] = useState(0);
    const [Product_Barcode, setProduct_Barcode] = useState(0);
    const [Manager, setManager] = useState(0);
    const url = require('url');

    const incomingData = {
      Order_ID: Order_ID,
      ShipmentDate: ShipmentDate,
      Quantity: Quantity,
      AssignedReceiver: AssignedReceiver,
      Inventory_Barcode: Inventory_Barcode,
      Product_Barcode: Product_Barcode,
      Manager: Manager,
    };

    const getQuery = () => {
      const result = [];
      const arr = Object.entries(incomingData)
      for (const [key, value] of arr) {
        if (value != 0) {
            result.push([key, value]);
        }
      }
      const actual = Object.fromEntries(result);
      console.log(actual);
      return actual;

    }
  
    const getIncomingOrder = () => {
      const filtered = getQuery();
      Axios.get('http://localhost:3000/orders/incoming/', {params: filtered}
      ).then(res => {
        console.log(res.data.args);
      }).catch(error => {
        console.log(error.response.data);
      });
    }

  return (
    <div>
        <div className="Incoming">
           <h3>Incoming Shipment Orders</h3>
           <label>Order ID:</label>
           <input type="number" 
             onChange={(event) => {
               setOrder_ID(event.target.value);
             }}
           />
           <label>Shipment Date:</label>
           <input type="text" 
             onChange={(event) => {
               setShipmentDate(event.target.value);
             }}
           />
           <label>Quantity:</label>
           <input type="number" 
             onChange={(event) => {
               setQuantity(event.target.value);
             }}
           />
           <label>Assigned Receiver:</label>
           <input type="number" 
               onChange={(event) => {
               setAssignedReceiver(event.target.value);
             }}
           />
           <label>Inventory Barcode:</label>
           <input type="number" 
             onChange={(event) => {
               setInventory_Barcode(event.target.value);
             }}
           />
           <label>Product Barcode:</label>
           <input type="number" 
           onChange={(event) => {
               setProduct_Barcode(event.target.value);
             }}
           />
           <label>Manager:</label>
           <input type="number" 
             onChange={(event) => {
               setManager(event.target.value);
             }}
           />
        </div>
        <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={getIncomingOrder}>Get Incoming</Button>
        </Stack>
    </div>
  )
}

export default GetIncomingOrderPage;