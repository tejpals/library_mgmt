import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid'
import LocalLibrary from '@material-ui/icons/LocalLibrary'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

export default function Navbar() {
    const buttonStyle = {
        color: 'black',
        margin: 'none',
        textTransform: 'none',
        padding: '10px'
    }
    const navbarStyle = {
        backgroundColor: 'white',
        color: 'black',
        padding: 'none'
    }
    return (
        <AppBar color="inherit" sx={navbarStyle}>
            <Toolbar style={{padding: 'none'}}>
                <Grid container>
                    <Grid item md={2} lg={1}>
                        
                    <Button style={buttonStyle} startIcon={<LocalLibrary />}>
                            <Typography variant="h6" color="inherit" component="div">
                                SKRRT
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item md={1}>
                        <Button style={buttonStyle}>
                            <Typography variant="h6" color="inherit" component="div">
                                Home
                            </Typography>
                        </Button>

                    </Grid>
                    <Grid item md={1}>
                        <Button style={buttonStyle}>
                            <Typography variant="h6" color="inherit" component="div">
                                Users
                            </Typography>
                        </Button>

                    </Grid>
                    <Grid item md={1}>
                        <Button style={buttonStyle}>
                            <Typography variant="h6" color="inherit" component="div">
                                Books
                            </Typography>
                        </Button>

                    </Grid>
                    <Grid item md={6} lg={7}>
                    </Grid>
                    <Grid item md={1}>
                        <Button style={buttonStyle}>
                            <Typography variant="h6" color="inherit" component="div">
                                Logout
                            </Typography>
                        </Button>

                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
