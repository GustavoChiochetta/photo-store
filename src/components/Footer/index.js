import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            <Link color="inherit" href="https://github.com/GustavoChiochetta/photo-store">
                <GitHubIcon />
            </Link>{' '}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '60vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: '#009dff',
    },
    footerText: {
        marginRight: '100px',
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <div className={classes.footerText}>
                        <Typography variant="body1">Developed by Gustavo Prior Chiochetta.</Typography>
                        <Link color="inherit" href="https://github.com/GustavoChiochetta/photo-store">
                            <GitHubIcon />
                        </Link>{' '}
                    </div>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;
