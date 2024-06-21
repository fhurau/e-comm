import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText } from '@mui/material';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            if (userInfo) {
                const { data } = await axios.get('/api/orders', {
                    headers: { Authorization: `Bearer ${userInfo.token}` },
                });
                setOrders(data);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div>
            <h1>Order History</h1>
            <List>
                {orders.map((order) => (
                    <ListItem key={order._id}>
                        <ListItemText primary={`Order ${order._id}`} secondary={`Total: $${order.totalPrice}`} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default OrderHistory;
