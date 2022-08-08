//import React from 'react'
import React, {useState} from 'react';
import Axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const GroupAggregation = () => {
  const [userList, setusers] = useState([]);
  const groupAggregation = () => {

  
    Axios.get('http://localhost:3000/products/aggregations/group/', 
    ).then(res => {
      console.log(res.data);
      setusers(res.data);
    }).catch(error => {
      console.log(error.response.data);
    });
  }


  return (
    <div>
      
      <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={groupAggregation}>Group Attributes</Button>
      </Stack>

      <table>
        <tr>
          <th>Brand ID  </th>
          <th>Brand Name  </th>
          <th>Average Price  </th>
          
        </tr>
        
        <tbody>
          {userList.map((user) => (
            <tr>
              <td>{user.Brand_ID}</td>
              <td>{user.Brand_Name}</td>
              <td>{user.AVG_Price}</td>             
            </tr>
          ))}
        </tbody>
        
       
        </table>




    </div>
  )
}

export default GroupAggregation;