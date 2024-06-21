import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Our story, mission, and vision.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Customer Service
                        </Typography>
                        <Link href="#" variant="body2" color="text.secondary" display="block">Contact Us</Link>
                        <Link href="#" variant="body2" color="text.secondary" display="block">FAQs</Link>
                        <Link href="#" variant="body2" color="text.secondary" display="block">Shipping & Returns</Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Follow Us
                        </Typography>
                        <Link href="#" variant="body2" color="text.secondary" display="block">Facebook</Link>
                        <Link href="#" variant="body2" color="text.secondary" display="block">Instagram</Link>
                        <Link href="#" variant="body2" color="text.secondary" display="block">Twitter</Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Newsletter
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Subscribe to our newsletter to get the latest updates.
                        </Typography>
                    </Grid>
                </Grid>
                <Box mt={4} textAlign="center">
                    <Typography variant="body2" color="text.secondary">
                        © 2024 My eCommerce Store. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
