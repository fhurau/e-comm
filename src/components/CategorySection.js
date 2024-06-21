import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import axios from 'axios';

const CategorySection = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const categoryNames = ['Dried Food', 'Figurines', 'Men\'s Sling Bags', 'Women\'s Flat Shoes'];
            const categoryImages = await Promise.all(categoryNames.map(async (category, index) => {
                try {
                    const response = await axios.get('https://api.pexels.com/v1/search', {
                        headers: {
                            Authorization: 'YOUR_PEXELS_API_KEY',
                        },
                        params: {
                            query: category,
                            per_page: 1,
                        },
                    });
                    return {
                        title: categoryNames[index],
                        image: response.data.photos[0].src.medium,
                    };
                } catch (error) {
                    console.error(`Error fetching images for category ${category}`, error);
                }
            }));

            setCategories(categoryImages);
        };

        fetchImages();
    }, []);

    return (
        <Box sx={{ p: 4, bgcolor: '#f8f8f8' }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Featured Categories
            </Typography>
            <Grid container spacing={2}>
                {categories.map((category, index) => (
                    <Grid item xs={6} sm={3} key={index}>
                        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
                            <img src={category.image} alt={category.title} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {category.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CategorySection;