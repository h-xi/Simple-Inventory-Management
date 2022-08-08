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

const ProjectProducts = () => {
  // const [Barcode, setBarcode] = useState(0);
  // const [P_name, setP_name] = useState("");
  // const [Size, setSize] = useState("");
  // const [Bin_name, setBin_name] = useState("");
  // const [Aisle_no, setAisle_no] = useState(0);
  // const [Category_ID, setCategory_ID] = useState(0);
  // const [Brand_ID, setBrand_ID] = useState(0);
  // const [Inventory_Barcode, setInventory_Barcode] = useState(0);
  // const [SupplierID, setSupplierID] = useState(0);
  // const [Price, setPrice] = useState(0);
  const [params, setParams] = useState([]);

  const handleParams = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log({ params });
    const index = params.indexOf(event.target.value);
    if (index === -1) {
      setParams([...params, event.target.value]);
    } else {
      setParams(params.filter((param) => param !== event.target.value));
    }
    // const index = (id) => {
    //     setParams(prevState => {
    //         if(prevState.includes(id)) {
    //             const clone = [...prevState];
    //             clone.splice(prevState.indexOf(id), 1)
    //             return clone;
    //         } else {
    //             return [...prevState, id]
    //         }
    //     });
    // }
  };

  // const incomingData = {
  //     Barcode: Barcode,
  //     P_name: P_name,
  //     Size: Size,
  //     Bin_name: Bin_name,
  //     Aisle_no: Aisle_no,
  //     Category_ID: Category_ID,
  //     Brand_ID: Brand_ID,
  //     Inventory_Barcode: Inventory_Barcode,
  //     SupplierID: SupplierID,
  //     Price: Price,
  //   };

  const projectProducts = () => {
    Axios.post("http://localhost:3000/products/filtered/", { params: params })
      .then((res) => {
        console.log(res.data.args);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.response.data);
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
    </div>
  );
};

export default ProjectProducts;
