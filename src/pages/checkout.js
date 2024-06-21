import React from 'react';
import { useContext } from 'react';
import { Store } from '../context/Store';
import { Button } from '@mui/material';

const Checkout = () => {
    const { state } = useContext(Store);
    const { cart } = state;

    const handleCheckout = () => {
        // Implement checkout functionality
        console.log('Checkout', cart);
    };

    return (
        <div>
            <h1>Checkout</h1>
            <Button variant="contained" color="primary" onClick={handleCheckout}>
                Proceed to Payment
            </Button>
        </div>
    );
};

export default Checkout;
