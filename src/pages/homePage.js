import React from 'react';
import { Container, Box } from '@mui/material';
import Navbar from '../components/Navbar';
import CarouselComponent from '../components/Carousel';
import CategorySection from '../components/CategorySection';
import SpecialDiscounts from '../components/SpecialDiscounts';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Container sx={{ mt: 4 }}>
            <CarouselComponent />
                <CategorySection />
                <SpecialDiscounts />
                <Box mt={4}>
                    <ProductList />
                </Box>
            </Container>
            <Footer />
        </div>
    );
};

export default HomePage;
