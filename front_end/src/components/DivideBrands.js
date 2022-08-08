import React from 'react'
import Axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const DivideBrands = () => {

  const divideBrands = () => {

      Axios.get('http://localhost:3000/brands/morethan/', 
    ).then(res => {
      console.log(res.data);
    }).catch(error => {
      console.log(error.response.data);
    });
  }
  return (
    <div>
      
      <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={divideBrands}>Select Attributes</Button>
      </Stack>
    </div>
  )
}

export default DivideBrands;