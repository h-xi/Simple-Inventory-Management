import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function DeletePage() {
    // let defaultDate = new Date();
    // defaultDate.setDate(defaultDate.getDate() + 3); //LOOK AT THIS FOR TOMORROW // STRING INITIAL STATE!!!
  
    const [Barcode, setBarcode] = useState(0);

    const deleteData = {
      Barcode: Barcode,
    };
  
    const deleteProduct = () => {
      Axios.delete('http://localhost:3000/products/', {data:deleteData}
      ).then(() => {
        console.log("Product data successfully deleted:", deleteData);
      }).catch(error => {
        console.log(error.response.data);
      });
    }
 
    return (
        <div className="deleteProductForm">
          <div className="Incoming">
            <h3>Product Management</h3>
            <label>Barcode:</label>
            <input type="number" 
              onChange={(event) => {
                setBarcode(event.target.value);
              }}
            />
            <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={deleteProduct}>Delete Product</Button>
            </Stack>
          </div>
        </div>
    );
  }
  
  export default DeletePage;