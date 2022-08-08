import React from 'react'
import Axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const HavingAggregation = () => {

  const havingAggregation = () => {

      Axios.get('http://localhost:3000/products/aggregations/having/', 
    ).then(res => {
      console.log(res.data);
    }).catch(error => {
      console.log(error.response.data);
    });
  }
  return (
    <div>
      
      <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={havingAggregation}>Select Attributes</Button>
      </Stack>
    </div>
  )
}

export default HavingAggregation;