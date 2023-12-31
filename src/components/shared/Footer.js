import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from "next/link";

const Footer = () => {
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
    return (
        <Box className='bg-black py-10'>
            <Container>
                <Box
                    className='w-full text-center'
                    sx={{
                        "& svg": {
                            color: "white",

                            fontSize: '35px'
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
                </Box>

                <Box className='w-full text-center' >
                    {NavItems.map((item) => (
                        <Link key={item} href={item.pathname}>
                            <Button className='text-white'>
                                {item.route}
                            </Button>
                        </Link>

                    ))}
                </Box>
                <Typography className="text-gray-300 w-full text-center text-sm">@2023 Dragon News. Design by Programming Hero developed by Arfat Chowdhury</Typography> 
            </Container>
        </Box>
    );
};

export default Footer;