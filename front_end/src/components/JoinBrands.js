import React from "react";
import { useState } from "react";
import Axios from "axios";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const JoinBrands = () => {
  const [numberTimes, setNumberTimes] = useState(0);

  const outgoingData = { orderData: {}, orderType: "OutgoingShipmentOrder" };

  const joinBrands = () => {
    console.log(numberTimes);
    // let obj = JSON.stringify({numberTimes});
    // console.log(obj);
    Axios.post("http://localhost:3000/brands/", { numberTimes: numberTimes })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  return (
    <div>
      <label>Enter Value:</label>
      <input
        type="number"
        onChange={(event) => {
          setNumberTimes(event.target.valueAsNumber);
        }}
      />
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={joinBrands}>
          Select Attributes
        </Button>
      </Stack>
    </div>
  );
};

export default JoinBrands;
