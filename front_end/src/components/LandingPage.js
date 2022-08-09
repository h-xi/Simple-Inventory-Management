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
                    <Link to="/orders/update">
                    <Button variant="contained">Update Orders</Button>
                    </Link>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Link to="/products">
                    <Button variant="contained">Delete Product</Button>
                    </Link>
                </Stack>
                {/* <Stack direction="row" spacing={2}>
                    <Link to="/orders/incoming">
                    <Button variant="contained">Get Incoming Products</Button>
                    </Link>
                </Stack> */}
                <Stack direction="row" spacing={2}>
                    <Link to="/orders/outgoing">
                    <Button variant="contained">Get Outgoing Products</Button>
                    </Link>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Link to="/products/filtered">
                    <Button variant="contained">Show Products - Projection</Button>
                    </Link>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Link to="/brands">
                    <Button variant="contained">Find Brands - Join</Button>
                    </Link>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Link to="/products/aggregations/group">
                    <Button variant="contained">Aggregation with Group</Button>
                    </Link>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Link to="/products/aggregations/having">
                    <Button variant="contained">Aggregation with Have</Button>
                    </Link>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Link to="/products/aggregations/nested">
                    <Button variant="contained">Nested Aggregation</Button>
                    </Link>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Link to="/brands/morethan">
                    <Button variant="contained">Division</Button>
                    </Link>
                </Stack>
            </div>
        </div>
    )
}