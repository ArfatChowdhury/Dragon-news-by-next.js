'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import logo from '@/assets/logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';
import { Stack } from '@mui/material';
import Header from './Header';


const NavItems = [
    {
        route: 'Home',
        pathname: "/",
    },
    {
        route: 'Pages',
        pathname: "/pages",
    },
    {
        route: 'Category',
        pathname: "/category",
    },
    {
        route: 'News',
        pathname: "/news",
    },
    {
        route: 'Post',
        pathname: "/post",
    },
    {
        route: 'Contact',
        pathname: "/contact",
    },
   
];


function Navbar() {


    return (
        <>
        <Header></Header>
        <AppBar position="static" className='bg-black'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Image src={logo} alt='logo'></Image>

                    <Box className='w-full text-center' >
                        {NavItems.map((item) => (
                            <Link key={item} href={item.pathname}>
                                <Button className='text-white'>
                                    {item.route}
                                </Button>
                            </Link>

                        ))}
                    </Box>

                    <Box>

                       <Stack direction='row' sx={{
                        "& svg": {
                            color:"white",
                        fontSize: '30px'
                        }
                       }}>
                       <IconButton>
                            <FacebookIcon></FacebookIcon>
                        </IconButton>
                        <IconButton>
                            <FacebookIcon></FacebookIcon>
                        </IconButton>
                        <IconButton>
                            <FacebookIcon></FacebookIcon>
                        </IconButton>
                        <IconButton>
                            <FacebookIcon></FacebookIcon>
                        </IconButton>
                        <IconButton>
                            <FacebookIcon></FacebookIcon>
                        </IconButton>
                       </Stack>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
        </>
    );
}
export default Navbar;