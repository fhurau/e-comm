import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import axios from 'axios';

const SpecialDiscounts = () => {
    const [discounts, setDiscounts] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('https://api.pexels.com/v1/search', {
                    headers: {
                        Authorization: 'YOUR_PEXELS_API_KEY',
                    },
                    params: {
                        query: 'product',
                        per_page: 3,
                    },
                });
                const discountData = response.data.photos.map((photo, index) => ({
                    title: `Special Discount ${index + 1}`,
                    image: photo.src.medium,
                    timer: Date.now() + 3600000, // 1 hour from now
                }));
                setDiscounts(discountData);
            } catch (error) {
                console.error('Error fetching images from Pexels', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <Box sx={{ p: 4, bgcolor: '#f8f8f8' }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Kejar Diskon Spesial
            </Typography>
            <Grid container spacing={2}>
                {discounts.map((discount, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <Card>
                            <img src={discount.image} alt={discount.title} style={{ width: '90%', height: '200px', objectFit: 'cover', padding: '5%' }} />
                            <CardContent style={{ height: '100px' }}>
                                <Typography variant="h6" component="div">
                                    {discount.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Berakhir dalam <CountdownTimer endTime={discount.timer} />
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

const CountdownTimer = ({ endTime }) => {
    const [timeLeft, setTimeLeft] = useState(endTime - Date.now());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(endTime - Date.now());
        }, 1000);

        return () => clearInterval(timer);
    }, [endTime]);

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    return (
        <span>{`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</span>
    );
};

export default SpecialDiscounts;