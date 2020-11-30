import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import './style.css';
import FirebaseService from '../../services/firebase';

const NewCustomerForm = ({ closeModal }) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cpf, setCpf] = useState('');

    const saveCustomer = async () => {
        try {
            await FirebaseService.createNewCustomer(name, lastName, cpf)
            closeModal();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form>
            <div className="inputContainer" >
                <TextField label="Name" variant="outlined" onChange={(v) => setName(v.target.value)} />
            </div>
            <div className="inputContainer" >
                <TextField label="Last Name" variant="outlined" onChange={(v) => setLastName(v.target.value)} />
            </div>
            <div className="inputContainer" >
                <TextField label="CPF" variant="outlined" onChange={(v) => setCpf(v.target.value)} />
            </div>
            <div className="inputContainer" >
                <Button variant="contained" color="primary" onClick={saveCustomer}>
                    Save
                </Button>
            </div>
        </form>
    );
};

export default NewCustomerForm;
