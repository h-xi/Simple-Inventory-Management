import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function DeletePage() {
    // let defaultDate = new Date();
    // defaultDate.setDate(defaultDate.getDate() + 3); //LOOK AT THIS FOR TOMORROW // STRING INITIAL STATE!!!
  
    const [Order_ID, setOrder_ID] = useState(0);
    const [ShipmentDate, setShipmentDate] = useState("");
    // const [Quantity, setQuantity] = useState(0);
    // const [AssignedReceiver, setAssignedReceiver] = useState(0);
    // const [Inventory_Barcode, setInventory_Barcode] = useState(0);
    // const [Product_Barcode, setProduct_Barcode] = useState(0);
    // const [Manager, setManager] = useState(0);
    // const [AssignedDriver, setAssignedDriver] = useState(0);
    // const [DeliveryAddress, setDeliveryAddress] = useState("");
    // const [DaysToShipment, setDaysToShipment] = useState(0);
  
    const incomingData = {orderData: {
      Order_ID: Order_ID,
      ShipmentDate: ShipmentDate,
    //   Quantity: Quantity,
    //   AssignedReceiver: AssignedReceiver,
    //   Inventory_Barcode: Inventory_Barcode,
    //   Product_Barcode: Product_Barcode,
    //   Manager: Manager,
    }, orderType: "IncomingShipmentOrder"};
  
    const deleteIncomingOrder = () => {
      Axios.post('http://localhost:3000/delete', incomingData
      ).then(() => {
        console.log("Incoming data successfully updated:", incomingData);
      }).catch(error => {
        console.log(error.response.data);
      });
    }
  
    const outgoingData = {orderData: {
      Order_ID: Order_ID,
      ShipmentDate: ShipmentDate,
    //   Quantity: Quantity,
    //   AssignedDriver: AssignedDriver,
    //   DeliveryAddress: DeliveryAddress,
    //   DaysToShipment: DaysToShipment,
    //   Inventory_Barcode: Inventory_Barcode,
    //   Product_Barcode: Product_Barcode,
    //   Manager: Manager,
    }, orderType: "OutgoingShipmentOrder"};
  
    const deleteOutgoingOrder = () => {
      Axios.post('http://localhost:3000/delete', outgoingData
      ).then(() => {
        console.log("Outgoing data successfully updated:", outgoingData);
      }).catch(error => {
        console.log(error.response.data);
      });
    }
  
    return (
        <div className="addOrderForm">
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
            <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={deleteIncomingOrder}>Delete Incoming Shipment</Button>
            </Stack>
          </div>
          <div className="Outgoing">
            <h3>Outgoing Shipment Orders</h3>
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
            <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={deleteOutgoingOrder}>Delete Outgoing Shipment</Button>
            </Stack>
          </div>
        </div>
    );
  }
  
  export default DeletePage;