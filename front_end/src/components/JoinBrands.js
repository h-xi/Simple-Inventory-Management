import React from "react";
import { useState } from "react";
import Axios from "axios";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const JoinBrands = () => {
  const [numberTimes, setNumberTimes] = useState(0);
  const [data, setData] = useState([]);
  const result = []

  const updateData = (initialData) => {
    console.log(initialData);
    let newData = [];
    for (const items of initialData) {
      let result = Object.values(items);
      newData.push(result);
    }
    console.log(newData);
    setData(newData);
  };


  const joinBrands = () => {
    console.log(numberTimes);
    // let obj = JSON.stringify({numberTimes});
    // console.log(obj);
    Axios.post("http://localhost:3000/brands/", { numberTimes: numberTimes })
      .then((res) => {
        console.log(res.data);
        updateData(res.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
//Find brands that have been ordered (outgoing shipment order) more than 'x' number of times
  return (
    <div>
      
      <h3>Find brands that have been ordered in the outgoing shipment more than inputted number of times</h3>
      <label>Enter Number of Times:</label>
      <input
        type="number"
        onChange={(event) => {
          setNumberTimes(event.target.valueAsNumber);
        }}
      />
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={joinBrands}>
          Find Brands
        </Button>
      </Stack>
      {/* <table>
        <tr>
          <th>Brand ID  </th>
          <th>Brand Name  </th>
          
        </tr>
        
        <tbody>
          {data.map((user) => (
            <tr>
              <td>{user.Brand_ID}</td>
              <td>{user.B_Name}</td>         
            </tr>
          ))}
        </tbody>
        
       
        </table> */}
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <th>Brand ID  </th>
            <th>Brand Name  </th>
          </TableHead>
          <TableBody>
            {/* {data.map((datapoint) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {datapoint.map((point) => (
                  <TableCell component="th" scope="row">
                    {point}
                  </TableCell>
                ))}
              </TableRow>
            ))} */}
            {data.map((d) => (
            <tr>
              <td>{d.Brand_ID}</td>
              <td>{d.b_Name}</td>         
            </tr>
          ))}
          </TableBody>
          {/* <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody> */}
        </Table>
      </TableContainer>
    </div>
  );
};

export default JoinBrands;
