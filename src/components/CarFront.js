import React from 'react';
import { AppBar,Toolbar, Typography } from '@mui/material';
import CarList from './components/CarList';
import Login from './components/Login';
function CarFront({isAuthenticated,loginAuth,logoutAuth}) {
    return (
        <div>
            <AppBar position='static'>
            <Toolbar>
            <Typography>
                CarShop {isAuthenticated ? <span onClick={logoutAuth}>Logout</span> : "" }
            </Typography>
            </Toolbar>
            </AppBar>
            {isAuthenticated ? <CarList/> : 
            <Login loginAuth={loginAuth}/> }
        </div>
    );
}

export default CarFront;