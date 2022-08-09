import React, {useState} from 'react';
import Axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const DivideBrands = () => {

  const [userList, setusers] = useState([]);
  const findBrandsWithAllSizes = () => {

      Axios.get('http://localhost:3000/brands/morethan/', 
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
              <Button variant="contained" onClick={findBrandsWithAllSizes}>Divide</Button>
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
              <td>{user.B_Name}</td>         
            </tr>
          ))}
        </tbody>
        
       
        </table>




    </div>
  )
}



export default DivideBrands