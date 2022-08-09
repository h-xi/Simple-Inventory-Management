import React, {useState} from 'react';
import Axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { getTableBodyUtilityClass } from '@mui/material';




function GetOutgoingOrderPage() {

  const [Order_ID, setOrder_ID] = useState(0);
  const [ShipmentDate, setShipmentDate] = useState("");
  const [Quantity, setQuantity] = useState(0);
  const [AssignedReceiver, setAssignedReceiver] = useState(0);
  const [Inventory_Barcode, setInventory_Barcode] = useState(0);
  const [Product_Barcode, setProduct_Barcode] = useState(0);
  const [Manager, setManager] = useState(0);
  const [AssignedDriver, setAssignedDriver] = useState(0);
  const [DeliveryAddress, setDeliveryAddress] = useState("");
  const [DaysToShipment, setDaysToShipment] = useState(0);
  const [data, setData] = useState([]);

  const [userList, setusers] = useState([]);
    const url = require('url');

    const outgoingData = {
      Order_ID: Order_ID,
      ShipmentDate: ShipmentDate,
      Quantity: Quantity,
      AssignedDriver: AssignedDriver,
      DeliveryAddress: DeliveryAddress,
      DaysToShipment: DaysToShipment,
      Inventory_Barcode: Inventory_Barcode,
      Product_Barcode: Product_Barcode,
      Manager: Manager,
    };

    const getQuery = () => {
      const result = [];
      const arr = Object.entries(outgoingData)
      for (const [key, value] of arr) {
        if (value != 0) {
            result.push([key, value]);
        }
      }
      const actual = Object.fromEntries(result);
      console.log(actual);
      return actual;

    }

    const getOutgoingOrder = () => {
      const filtered = getQuery();
      console.log(filtered);
      Axios.get('http://localhost:3000/orders/outgoing/', {params: filtered}
      ).then(res => {
        console.log(res.data.args);
        setusers(res.data);
        setData(res.data.args);
        console.table(res.data);
      }).catch(error => {
        console.log(error.response.data);
      });
    }

  return (
    <div>
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
            <label>Delivery Address:</label>
            <input type="text" 
              onChange={(event) => {
                setDeliveryAddress(event.target.value);
              }}
            />
            <label>Days To Shipment:</label>
            <input type="number" 
              onChange={(event) => {
                setDaysToShipment(event.target.value);
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
            <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={() => {getOutgoingOrder();}}>Get Outgoing</Button>
            </Stack>

            <table>
        <tr>
          <th>Brand ID  </th>
          <th>Shipment Date  </th>
          <th>Quantity  </th>
          <th>Assigned Driver  </th>
          <th>Delivery Address  </th>
          <th>Days To Shipment  </th>
          <th>Inventory Barcode  </th>
          <th>Product Barcode  </th>
          <th>Manager  </th>
          
        </tr>
        
        <tbody>
          {userList.map((user) => (
            <tr>
              <td>{user.Order_ID}</td>
              <td>{user.ShipmentDate}</td>
              <td>{user.Quantity}</td>
              <td>{user.AssignedDriver}</td>
              <td>{user.DeliveryAddress}</td>
              <td>{user.DaysToShipment}</td>   
              <td>{user.Inventory_Barcode}</td>  
              <td>{user.Product_Barcode}</td>
              <td>{user.Manager}</td>   
            </tr>
          ))}
        </tbody>
        
       
        </table>



          </div>
    </div>
  )
}

export default GetOutgoingOrderPage;