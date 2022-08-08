import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const DivideBrands = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    divideBrands()
}, [])

  const divideBrands = () => {

      Axios.get('http://localhost:3000/brands/morethan/', 
    ).then(res => {
      console.log(res.data);
      setData(res);
    }).catch(error => {
      console.log(error.response.data);
    });
  }


  return (
    <div>
      
      <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={divideBrands}>Divide Attributes</Button>
      </Stack>
    </div>
  )
}

export default DivideBrands;