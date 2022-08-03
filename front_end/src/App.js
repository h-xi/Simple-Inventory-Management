import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {
  const [orderId, setOrderId] = useState(0);
  const [itemNumber, setItemNumber] = useState(0);
  const [shipmentDate, setShipmentDate] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [assignedReceiver, setAssignedReceiver] = useState("");
  const [assignedDriver, setAssignedDriver] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const updateOrder = () => {
    Axios.post('http://localhost:8000/orders', {
      orderId: orderId,
      itemNumber: itemNumber,
      shipmentDate: shipmentDate,
      quantity: quantity,
      assignedReceiver: assignedReceiver,
      assignedDriver: assignedDriver,
      deliveryAddress: deliveryAddress
    }).then(() => {
      console.log("success");
    });
  }

  const displayInfo = () => {
    console.log(orderId + itemNumber + shipmentDate + quantity + assignedReceiver + assignedDriver + deliveryAddress);
  };

  return (
    <div className="App">
      <div className="Incoming">
        <label>Order ID:</label>
        <input type="number" 
          onChange={(event) => {
            setOrderId(event.target.value);
          }}
        />
        <label>Item Number:</label>
        <input type="number" 
          onChange={(event) => {
            setItemNumber(event.target.value);
          }}
        />
        <label>Shipment Date:</label>
        <input type="date" 
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
        <input type="text" 
          onChange={(event) => {
            setAssignedDriver(event.target.value);
          }}
        />
        <button onClick={updateOrder}>Incoming Shipment</button>
      </div>
      <div className="Outgoing">
        <label>Order ID:</label>
        <input type="number" 
          onChange={(event) => {
            setOrderId(event.target.value);
          }}
        />
        <label>Item Number:</label>
        <input type="number" 
          onChange={(event) => {
            setItemNumber(event.target.value);
          }}
        />
        <label>Shipment Date:</label>
        <input type="date" 
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
        <label>Assigned Driver:</label>
        <input type="text" 
          onChange={(event) => {
            setAssignedDriver(event.target.value);
          }}
        />
        <label>Delivery Address:</label>
        <input type="text" 
          onChange={(event) => {
            setDeliveryAddress(event.target.value);
          }}
        />
        <button onClick={updateOrder}>Outgoing Shipment</button>
      </div>
    </div>
  );
}

export default App;
