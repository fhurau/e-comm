import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box } from '@mui/material';
import axios from 'axios';

const CarouselComponent = () => {
    const [items, setItems] = useState([]);

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
                setItems(response.data.photos);
            } catch (error) {
                console.error('Error fetching images from Pexels', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, width: '100%', margin: 'auto' }}>
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} dynamicHeight={true}>
                {items.map((item, index) => (
                    <div key={index}>
                        <img src={item.src.landscape} alt={`Slide ${index + 1}`} style={{ borderRadius: '8px', maxHeight: '400px', objectFit: 'cover' }} />
                    </div>
                ))}
            </Carousel>
        </Box>
    );
};

export default CarouselComponent;