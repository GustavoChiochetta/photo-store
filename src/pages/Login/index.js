import React from 'react';
import Form from '../../components/Form';
import Typography from '@material-ui/core/Typography';
import './style.css';

const Login = () => {
    return (
        <div className="container">
            <div>
                <Typography variant="h3">
                    Welcome to Photo-Store, <br></br>
                    Here You can save your photos and check your customers. <br></br>
                    <Typography variant="h6">
                        Please Log-in.
                    </Typography>
                </Typography>
                <Form />
            </div>
        </div>
    );
}

export default Login;