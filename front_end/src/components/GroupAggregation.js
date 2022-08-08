import React from 'react'
import Axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const GroupAggregation = () => {

  const groupAggregation = () => {

      Axios.get('http://localhost:3000/products/aggregations/group/', 
    ).then(res => {
      console.log(res.data);
    }).catch(error => {
      console.log(error.response.data);
    });
  }
  return (
    <div>
      
      <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={groupAggregation}>Select Attributes</Button>
      </Stack>
    </div>
  )
}

export default GroupAggregation;