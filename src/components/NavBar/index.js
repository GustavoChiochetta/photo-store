import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';

const NavBar = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
                        <AddIcon />
                    </IconButton>
                    <Typography variant="h6" className={styles.title}>
                        Add Images
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
