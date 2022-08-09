import './App.css';
import { useState } from 'react';
import Axios from 'axios';
import * as React from 'react';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link, Route, BrowserRouter, Routes } from 'react-router-dom';
import OrderPage from "./components/OrderPage";
import LandingPage from "./components/LandingPage";
import DeletePage from "./components/DeletePage";
import GetIncomingOrderPage from "./components/GetIncomingOrderPage";
import GetOutgoingOrderPage from "./components/GetOutgoingOrderPage";
import ProjectProducts from "./components/ProjectProducts";
import UpdatePage from "./components/UpdatePage";


import JoinBrands from "./components/JoinBrands";
import GroupAggregation from "./components/GroupAggregation";
import HavingAggregation from "./components/HavingAggregation";
import NestedAggregation from "./components/NestedAggregation";
import DivideBrands from "./components/DivideBrands";
 
function App() {
  return (
    <div className="App">
      <ManageAccountsIcon icon="ManageAccounts"/>
      <h1 className="App-name">Inventory Management System</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/orders/update/" element={<UpdatePage />} />
          <Route path="/products" element={<DeletePage />} />
          <Route path="/orders/incoming" element={<GetIncomingOrderPage />} />
          <Route path="/orders/outgoing" element={<GetOutgoingOrderPage />} />
          <Route path="/products/filtered" element={<ProjectProducts />} />
          <Route path="/brands" element={<JoinBrands />} />
          <Route path="/products/aggregations/group" element={<GroupAggregation />} />
          <Route path="/products/aggregations/having" element={<HavingAggregation />} />
          <Route path="/products/aggregations/nested" element={<NestedAggregation />} />
          <Route path="/brands/morethan" element={<DivideBrands />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
