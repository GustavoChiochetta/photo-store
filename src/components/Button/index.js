import React from 'react';
import Button from '@material-ui/core/Button'

const MaterialButton = ({ label, onClick }) => {
    return (
        <>
            <Button variant="contained" color="primary" onClick={onClick}>
                {label}
            </Button>
        </>
    );
};

export default MaterialButton;
