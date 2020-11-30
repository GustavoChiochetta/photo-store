import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FirebaseService from '../../services/firebase';

const AddImage = () => {
    const [userIsSigned, setUserIsSigned] = useState(true);
    const [file, setFile] = useState();

    const uploadPhoto = async () => {
        await FirebaseService.saveImage(file);
    };

    const userSigned = async () => {
        // const isLoged = await FirebaseService.userIsLogged()
        setUserIsSigned(true);
    };

    useEffect(() => {
        userSigned();
    }, []);

    return (
        <div>
            {userIsSigned ? (
                <div>
                    <input type='file' onChange={(e) => setFile(e.target.files)} />
                    {file && (
                        <>
                            <div>Foto pronta para ser enviada</div>
                            <Button onClick={uploadPhoto}>Salvar</Button>
                        </>
                    )}
                </div>
            ) : (
                    <div>Usuário não logado, faça login {(<Link to="/">aqui</Link>)}</div>
                )}

        </div>
    );
};

export default AddImage;
