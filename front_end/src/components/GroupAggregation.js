import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const GroupAggregation = () => {
  const [data, setData] = useState(null);
  const groupAggregation = () => {

  
    Axios.get('http://localhost:3000/products/aggregations/group/', 
    ).then(res => {
      console.log(res.data);
      setData(res.data);
    }).catch(error => {
      console.log(error.response.data);
    });
  }

  if (data) {
    return (
      <div>
        <h1>{data.Brand_ID}</h1>
        
      </div>
    )
  }
  return (
    <div>
      
      <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={groupAggregation}>Group Attributes</Button>
      </Stack>
    </div>
  )
}

export default GroupAggregation;