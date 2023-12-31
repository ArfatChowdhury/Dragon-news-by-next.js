import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import img from '@/assets/TheDragonNews.png'
import React from 'react';
import { getCurrentDate } from '@/utils/CurrentDate';

const Header = () => {
    const currentDate = getCurrentDate()
    return (
        <Box>
        
            <Container>
                <Image className=' mx-auto' src={img} width={500} height={500}  alt='headerImg'/>
                <Typography className="text-gray-500 w-full text-center text-sm">Journalism Without Fear or Favour</Typography> 
                <Typography className="text-gray-500 w-full text-center  font-semibold">{currentDate}</Typography> 
            </Container>
        </Box>
    );
};

export default Header;