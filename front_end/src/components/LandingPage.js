import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function LandingPage() {
    return (
        <div>
            <div className="Options">
                <Stack direction="row" spacing={2}>
                    <Link to="/orders">
                    <Button variant="contained">Add Orders</Button>
                    </Link>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Link to="/products">
                    <Button variant="contained">Delete Product</Button>
                    </Link>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Link to="/orders/incoming">
                    <Button variant="contained">Get Incoming Products</Button>
                    </Link>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Link to="/orders/outgoing">
                    <Button variant="contained">Get Outgoing Products</Button>
                    </Link>
                </Stack>
            </div>
        </div>
    )
}