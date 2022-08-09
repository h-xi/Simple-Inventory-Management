import React, { Component } from "react";
import { useState } from "react";
import Axios from "axios";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Checkbox } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ProjectProducts = () => {
  const [params, setParams] = useState([]);
  const [data, setData] = useState([]);

  const handleParams = (event) => {
    const index = params.indexOf(event.target.value);
    if (index === -1) {
      setParams([...params, event.target.value]);
    } else {
      setParams(params.filter((param) => param !== event.target.value));
    }
  };

  const updateData = (initialData) => {
    console.log(initialData);
    let data = [];
    for (const items of initialData) {
      let result = Object.values(items);
      data.push(result);
    }
    console.log(data);
    setData(data);
  };

  const projectProducts = () => {
    Axios.post("http://localhost:3000/products/filtered/", { params: params })
      .then((res) => {
        console.log(params);
        // console.log(res.data.args);
        console.log(res.data);
        updateData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1></h1>
      <FormControl>
        <FormLabel>Products</FormLabel>
        <FormGroup>
          <FormControlLabel
            label="Barcode"
            control={
              <Checkbox
                value="Barcode"
                checked={params.includes("Barcode")}
                onChange={handleParams}
              />
            }
          />
          <FormControlLabel
            label="P_name"
            control={
              <Checkbox
                value="P_name"
                checked={params.includes("P_name")}
                onChange={handleParams}
              />
            }
          />
          <FormControlLabel
            label="Size"
            control={
              <Checkbox
                value="Size"
                checked={params.includes("Size")}
                onChange={handleParams}
              />
            }
          />
          <FormControlLabel
            label="Bin_name"
            control={
              <Checkbox
                value="Bin_name"
                checked={params.includes("Bin_name")}
                onChange={handleParams}
              />
            }
          />
          <FormControlLabel
            label="Aisle_no"
            control={
              <Checkbox
                value="Aisle_no"
                checked={params.includes("Aisle_no")}
                onChange={handleParams}
              />
            }
          />
          <FormControlLabel
            label="Category_ID"
            control={
              <Checkbox
                value="Category_ID"
                checked={params.includes("Category_ID")}
                onChange={handleParams}
              />
            }
          />
          <FormControlLabel
            label="Brand_ID"
            control={
              <Checkbox
                value="Brand_ID"
                checked={params.includes("Brand_ID")}
                onChange={handleParams}
              />
            }
          />
          <FormControlLabel
            label="Inventory_Barcode"
            control={
              <Checkbox
                value="Inventory_Barcode"
                checked={params.includes("Inventory_Barcode")}
                onChange={handleParams}
              />
            }
          />
          <FormControlLabel
            label="SupplierID"
            control={
              <Checkbox
                value="SupplierID"
                checked={params.includes("SupplierID")}
                onChange={handleParams}
              />
            }
          />
          <FormControlLabel
            label="Price"
            control={
              <Checkbox
                value="Price"
                checked={params.includes("Price")}
                onChange={handleParams}
              />
            }
          />
        </FormGroup>
      </FormControl>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={projectProducts}>
          Select Attributes
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {params.map((param) => (
                <TableCell component="th" scope="col">
                  {param}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((datapoint) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {datapoint.map((point) => (
                  <TableCell component="th" scope="row">
                    {point}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProjectProducts;
