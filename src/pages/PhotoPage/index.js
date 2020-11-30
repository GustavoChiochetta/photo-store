import React, { useEffect, useState } from 'react';
import firebase from '../../firebase-config';
import FirebaseService from '../../services/firebase';
import './styles.css';
import Imgix from 'react-imgix';
import { Link } from 'react-router-dom';

const PhotoPage = () => {
    const [imageUrls, setImageUrls] = useState([]);
    const [userIsSigned, setUserIsSigned] = useState(false);

    const userSigned = async () => {
        const isLoged = await FirebaseService.userIsLogged()
        setUserIsSigned(!!isLoged);
    };

    const getData = async () => {
        let storageRef = await firebase.storage().ref();
        let result = await storageRef.listAll();
        let urlPromises = result.items.map(imageRef => imageRef.getDownloadURL());

        return Promise.all(urlPromises);
    };

    const loadData = async () => {
        const urls = await getData();
        console.log(urls);
        setImageUrls(urls);
    };

    useEffect(() => {
        loadData();
        userSigned();
    }, []);

    return (
        <div>
            {userIsSigned ? (
                <div className="gallery">
                    {imageUrls.map((v) => (
                        <Imgix
                            key={v}
                            sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
                            src={v}
                            imgixParams={{
                                fit: "crop",
                                fm: "jpg"
                            }}
                            width={300}
                            height={300}
                        />
                    ))}
                </div>
            ) : (
                    <div>Usuário não logado, faça login {(<Link to="/">aqui</Link>)}</div>
                )}
        </div>
    );
};

export default PhotoPage;
