import React, { useState, useEffect } from 'react';
import CustomerTable from '../../components/CustomerTable';
import { Link } from 'react-router-dom';
import FirebaseService from '../../services/firebase';

const Main = () => {
    const [userIsSigned, setUserIsSigned] = useState(false);

    const userSigned = async () => {
        const isLoged = await FirebaseService.userIsLogged()
        setUserIsSigned(!!isLoged);
    };

    useEffect(() => {
        userSigned();
    }, []);

    return (
        <div>
            {userIsSigned ? (<CustomerTable />) : (
                <div>Usuário não logado, faça login {(<Link to="/">aqui</Link>)}</div>
            )}

        </div>

    );
};

export default Main;
