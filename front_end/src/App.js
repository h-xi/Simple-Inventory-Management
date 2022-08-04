import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {
  let defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() + 3);

  const [Order_ID, setOrder_ID] = useState(0);
  const [ShipmentDate, setShipmentDate] = useState(defaultDate);
  const [Quantity, setQuantity] = useState(0);
  const [AssignedReceiver, setAssignedReceiver] = useState(0);
  const [Inventory_Barcode, setInventory_Barcode] = useState(0);
  const [Product_Barcode, setProduct_Barcode] = useState(0);
  const [Manager, setManager] = useState(0);
  const [AssignedDriver, setAssignedDriver] = useState(0);
  //const [DeliveryAddress, setDeliveryAddress] = useState("");

  const outgoingData = {orderData: {
    order_id: Order_ID,
    shipmentDate: ShipmentDate,
    quantity: Quantity,
    assignedEmployee: AssignedDriver,
    //DeliveryAddress: DeliveryAddress,
    barcode: Inventory_Barcode,
    product: Product_Barcode,
    manager: Manager,
  }, orderType: "OutgoingShipmentOrder"};



  const updateOutgoingOrder = () => {
    console.log(outgoingData);
    Axios.post('http://localhost:3000/orders', outgoingData
    ).then(() => {
      console.log("success");
    }).catch(error => {
      console.log(error.response.data);
    });
  }

  const incomingData = {orderData: {
    order_id: Order_ID,
    shipmentDate: ShipmentDate,
    quantity: Quantity,
    assignedEmployee: AssignedReceiver,
    barcode: Inventory_Barcode,
    product: Product_Barcode,
    manager: Manager,
  }, orderType: "IncomingShipmentOrder"};

  const updateIncomingOrder = () => {
    console.log(typeof ShipmentDate);
    console.log(ShipmentDate);
    console.log(incomingData);
    Axios.post('http://localhost:3000/orders', incomingData
    ).then(() => {
      console.log("success");
    }).catch(error => {
      console.log(error.response.data);
    });
  }

  // const displayInfo = () => {
  //   console.log(Order_ID + Inventory_Barcode + ShipmentDate + Quantity + AssignedReceiver + Manager);
  // };

  return (
    <div className="App">
      <div className="Incoming">
        <label>Order ID:</label>
        <input type="number" 
          onChange={(event) => {
            setOrder_ID(event.target.value);
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
        <label>Manager:</label>
        <input type="number" 
          onChange={(event) => {
            setManager(event.target.value);
          }}
        />
        <button onClick={updateIncomingOrder}>Incoming Shipment</button>
      </div>
      <div className="Outgoing">
        <label>Order ID:</label>
        <input type="number" 
          onChange={(event) => {
            setOrder_ID(event.target.value);
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
        <label>Assigned Driver:</label>
        <input type="number" 
          onChange={(event) => {
            setAssignedDriver(event.target.value);
          }}
        />
        {/* <label>Delivery Address:</label>
        <input type="text" 
          onChange={(event) => {
            setDeliveryAddress(event.target.value);
          }}
        /> */}
        <label>Manager:</label>
        <input type="number"
          onChange={(event) => {
            setManager(event.target.value);
          }}
        />
        <button onClick={updateOutgoingOrder}>Outgoing Shipment</button>
      </div>
    </div>
  );
}

export default App;
