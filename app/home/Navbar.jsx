import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Logo from "../../public/logo.svg";
import { Divider, Menu, Stack } from '@mui/material';
import DropdownButton from './DropdownButton';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function NavbarUpperHalve() {
    return <div className='w-1/2 flex items-center justify-evenly self-end px-10'>
        <Typography variant="overline" className='text-font_bg' >ABOUT TRAJECT</Typography>
        <DropdownButton label={"RESOURCES"} isTopButton={true} />
        <Typography variant="overline" className='text-font_bg'>CONTACT US</Typography>
        <Button className="text-xs text-font_bg" variant="text"
            startIcon={<PersonOutlineOutlinedIcon sx={{ color: "#cccccc" }} />}>SIGN IN</Button>
    </div>
}

function NavbarBottomHalve() {
    return <div className='flex items-center justify-evenly px-10 py-1'>
        <div className="w-1/3 mt-2">
            <Image src={Logo} alt="Logo" height={40} />
        </div>
        <DropdownButton label={"Ecommerce APIs"} isTopButton={false} />
        <DropdownButton label={"SERP APIs"} isTopButton={false} />
        <Typography variant="body1" className='text-font_bg'>Enterprise</Typography>
        <Typography variant="body1" className='text-font_bg'>Pricing</Typography>
        <Button sx={{
            borderColor: "#cccccc",
            "&:hover": {
                borderColor: "#cccccc"
            }
        }} className="text-font_bg" variant="outlined">FIND YOUR API</Button>

    </div>
}
const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className='bg-navbar_bg px-0 mx-0' >
                    <Stack
                        divider={<Divider
                            sx={{
                                backgroundColor: "#cccccc",
                                border: "solid 1px",
                                borderColor: "#cccccc",
                                width: '100%'
                            }}
                            orientation="horizontal" flexItem
                            variant='fullWidth'
                        />} className='w-full'>
                        <NavbarUpperHalve />
                        <NavbarBottomHalve />
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default Navbar
