import React from 'react';
import { useContext } from 'react';
import { Store } from '../context/Store';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const ShoppingCart = () => {
    const { state, dispatch } = useContext(Store);
    const { cart } = state;

    const handleRemoveFromCart = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>
                    Your cart is empty. <Link to="/products">Go shopping</Link>
                </p>
            ) : (
                <List>
                    {cart.map((item) => (
                        <ListItem key={item._id}>
                            <ListItemText primary={item.name} secondary={`$${item.price}`} />
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleRemoveFromCart(item._id)}
                            >
                                Remove
                            </Button>
                        </ListItem>
                    ))}
                </List>
            )}
        </div>
    );
};

export default ShoppingCart;
