import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const features = [
    { title: 'Free Shipping', description: 'On orders over $50', icon: '🚚' },
    { title: '24/7 Support', description: 'We are here to help', icon: '📞' },
    { title: 'Money Back Guarantee', description: '30-day money back', icon: '💰' },
];

const FeatureSection = () => {
    return (
        <Box sx={{ p: 4, textAlign: 'center' }}>
            <Grid container spacing={4}>
                {features.map((feature, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <Typography variant="h4" component="div">
                            {feature.icon}
                        </Typography>
                        <Typography variant="h6" component="div">
                            {feature.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {feature.description}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default FeatureSection;
