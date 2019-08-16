import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        borderRadius: "6px"
    },
    nav: {
        marginBottom: 15
    }
};
const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            text: {
                color: "white",
                fontWeight: "bold",
                // background: 'linear-gradient(45deg, rgb(0, 0, 0) 50%, rgb(73, 73, 73) 80%)',
                borderRadius: 3,
                border: "1px solid white",
                margin: "0 10px",
                padding: '0 20px',
                boxShadow: '0 1px 2px 2px rgba(226, 226, 226, .3)',
            },
        },
    },
})

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <AppBar position="static" color="primary" className={classes.nav}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" component={Link} to="/">
                                <HomeIcon />&nbsp;Стоки за дома
                            </IconButton>
                        </Typography>
                        <Button component={Link} to="/">Начало</Button>
                        <Button component={Link} to="/products">Продукти</Button>
                        <Button component={Link} to="about">За нас</Button>
                    </Toolbar>
                </AppBar>
            </div>
        </MuiThemeProvider>
    );
}

export default withStyles(styles)(ButtonAppBar);