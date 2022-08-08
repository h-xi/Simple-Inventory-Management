import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const JoinBrands = () => {

  const [value, setValue] = useState(0);

  const joinBrands = () => {
      console.log({value})
      Axios.get('http://localhost:3000/brands/', {params: {value}}
    ).then(res => {
      console.log(res.data);
    }).catch(error => {
      console.log(error.response.data);
    });
  }
  return (
    <div>
      <label>Enter Value:</label>
            <input type="number" 
              onChange={(event) => {
                setValue(event.target.value);
              }}
            />
      <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={joinBrands}>Select Attributes</Button>
      </Stack>
    </div>
  )
}

export default JoinBrands;