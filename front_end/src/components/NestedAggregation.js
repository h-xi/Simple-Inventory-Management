import React from 'react'
import Axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const NestedAggregation = () => {

  const nestedAggregation = () => {

      Axios.get('http://localhost:3000/products/aggregations/join/', 
    ).then(res => {
      console.log(res.data);
    }).catch(error => {
      console.log(error.response.data);
    });
  }
  return (
    <div>
      
      <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={nestedAggregation}>Select Attributes</Button>
      </Stack>
    </div>
  )
}

export default NestedAggregation;