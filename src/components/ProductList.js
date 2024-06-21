import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, CardMedia, Typography, CardActions, Button, CircularProgress, Box } from '@mui/material';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(response => {
                setProducts(response.data.products);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching the products', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Grid container spacing={4}>
            {products.map(product => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column',
                        '&:hover': {
                            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                        }
                    }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={product.thumbnail}
                            alt={product.title}
                            sx={{ objectFit: 'contain', padding: '16px', bgcolor: '#f5f5f5' }}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h6" component="div" noWrap>
                                {product.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" noWrap>
                                {product.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">View Details</Button>
                            <Button size="small" color="secondary">Add to Cart</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;
