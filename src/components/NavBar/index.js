import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';
import FirebaseService from '../../services/firebase';
import { useHistory } from 'react-router-dom';

const NavBar = ({ openModal, reRender }) => {
    const history = useHistory();
    const styles = useStyles();
    const [isLogged, setIsLogged] = useState(false);

    const logout = async () => {
        try {
            await FirebaseService.logout();
            history.push('/')
        } catch (error) {
            console.log(error);
        }
    }

    const userIsLogged = async () => {
        const user = await FirebaseService.userIsLogged();

        setIsLogged(!!user);
    };

    useEffect(() => {
        userIsLogged();
    }, [])

    return (
        <div className={styles.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu" onClick={() => history.push('/add-image')}>
                        <AddIcon />
                    </IconButton>
                    <Typography variant="h6" className={styles.title}>
                        Add Images
                    </Typography>
                    <Button color="inherit" onClick={async () => await logout()}>{isLogged ? 'Logout' : 'Login'}</Button>
                    <Button color="inherit" onClick={() => openModal(true)}>add Customer</Button>
                    <Button color="inherit" onClick={() => history.push('/main')}>Custommers Page</Button>
                    <Button color="inherit" onClick={() => history.push('/photo-page')}>Photo Page</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
