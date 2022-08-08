//import lib
import React, {useState} from 'react';

//import React from 'react'
import Axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const NestedAggregation = () => {
  //initializing userlist
  const [userList, setusers] = useState([]);

  const nestedAggregation = () => {

      Axios.get('http://localhost:3000/products/aggregations/nested/', 
    ).then(res => {
      console.log(res.data);
    //setting user list
      setusers(res.data);
    }).catch(error => {
      console.log(error.response.data);
    });
  }
  return (
    <div>

           
      <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={nestedAggregation}>Select Attributes test</Button>
      </Stack>

    
      <table>
        <tr>
          <th>Brand ID  </th>
          <th>Average Price  </th>
          
        </tr>
        
        <tbody>
          {userList.map((user) => (
            <tr>
              <td>{user.Brand_ID}</td>
              <td>{user.AVG_Price}</td>
             
            </tr>
          ))}
        </tbody>
        
       
        </table>

    </div>

  )
}

export default NestedAggregation;