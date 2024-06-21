import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const HeroSection = () => {
    const handleButtonClick = () => {
        // Add your custom logic here
        console.log('Shop Now button clicked!');
    };

    return (
        <Box
            sx={{
                height: '70vh',
                background: 'url(https://via.placeholder.com/1500x500) no-repeat center center',
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                textAlign: 'center',
                p: 4
            }}
        >
            <Typography variant="h2" component="h1" gutterBottom>
                Welcome to Our Store
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                Discover our exclusive collection
            </Typography>
            <Button variant="contained" color="secondary" size="large" onClick={handleButtonClick}>
                Shop Now
            </Button>
        </Box>
    );
};

export default HeroSection;
