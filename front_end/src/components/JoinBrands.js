import React, {useState} from 'react';
import Axios from "axios";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const JoinBrands = () => {
  const [numberTimes, setNumberTimes] = useState(0);
  const [userList, setusers] = useState([]);
  const outgoingData = { orderData: {}, orderType: "OutgoingShipmentOrder" };

  const joinBrands = () => {
    console.log(numberTimes);
    // let obj = JSON.stringify({numberTimes});
    // console.log(obj);
    Axios.post("http://localhost:3000/brands/", { numberTimes: numberTimes })
      .then((res) => {
        console.log(res.data);
        setusers(res.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

//Find brands that have been ordered (outgoing shipment order) more than 'x' number of times
  return (
    <div>
      <h3>Find brands that have been ordered in the outgoing shipment more than inputted number of times</h3>
      <label>Enter Number of Times:</label>
      <input
        type="number"
        onChange={(event) => {
          setNumberTimes(event.target.valueAsNumber);
        }}
      />
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={joinBrands}>
          Find Brands
        </Button>
      </Stack>

      <table>
        <tr>
          <th>Brand ID  </th>
          <th>Brand Name  </th>
          
        </tr>
        
        <tbody>
          {userList.map((user) => (
            <tr>
              <td>{user.Brand_ID}</td>
              <td>{user.b_name}</td>
             
            </tr>
          ))}
        </tbody>
        
       
        </table>


    </div>
  );
};

export default JoinBrands;