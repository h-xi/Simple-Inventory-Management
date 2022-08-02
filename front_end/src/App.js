import './App.css';
import { useState } from 'react';

function App() {
  const [orderId, setOrderId] = useState(0);
  const [itemNumber, setItemNumber] = useState(0);
  const [shipmentDate, setShipmentDate] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [assignedReceiver, setAssignedReceiver] = useState("");
  const [assignedDriver, setAssignedDriver] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

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
        <button onClick={displayInfo}>Incoming Shipment</button>
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
        <button onClick={displayInfo}>Outgoing Shipment</button>
      </div>
    </div>
  );
}

export default App;
