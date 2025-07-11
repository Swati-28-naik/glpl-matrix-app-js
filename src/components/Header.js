import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = ({ userName }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    GLPL Matrix
                </Typography>
                <Typography variant="body1">
                    {userName}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;