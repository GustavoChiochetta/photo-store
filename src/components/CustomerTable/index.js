import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FirebaseService from '../../services/firebase';
import useStyles from './styles';
import './table.css';

const CustomerTable = () => {
    const [customers, setCustomers] = useState([]);
    const styles = useStyles();

    const getData = async () => {
        try {
            const response = await FirebaseService.readData();
            setCustomers(response);
        } catch (error) {
            console.log(error);
            alert('algo deu errado ao tentar carregar os clientes');
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="table-container">
            <div className="title">Customers</div>
            <TableContainer component={Paper}>
                <Table className={styles.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">CPF</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.map((value) => {
                            return (
                                <TableRow key={value.cpf}>
                                    <TableCell align="right">{value.name}</TableCell>
                                    <TableCell align="right">{value.lastName}</TableCell>
                                    <TableCell align="right">{value.cpf}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            Atualize a pagina para ver as modificações
        </div>
    );
};

export default CustomerTable;
