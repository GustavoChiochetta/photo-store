import React, { useEffect, useState } from 'react';
import TextInput from '../TextInput';
import Button from '../Button';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const firebaseConfig = {
        apiKey: "AIzaSyDrbgBPJRU-cvRmtwnCy-HayZPi5ul-3jE",
        authDomain: "photo-store-fd99f.firebaseapp.com",
        databaseURL: "https://photo-store-fd99f.firebaseio.com",
        projectId: "photo-store-fd99f",
        storageBucket: "photo-store-fd99f.appspot.com",
        messagingSenderId: "1091268010305",
        appId: "1:1091268010305:web:55374ae0e3db7ada4701c0"
    };
    const history = useHistory();

    const initialize = () => firebase.initializeApp(firebaseConfig);

    const createNewUser = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
            console.log(error);
        });
    };

    const login = async () => {
        try {

            await firebase.auth().signInWithEmailAndPassword(email, password);
            history.push('/main');
        } catch (error) {
            console.log('deu errado');
            console.log(error);
        }
    }

    const onChangeEmail = (v) => {
        setEmail(v);
    }

    const onChangePassword = (v) => {
        setPassword(v);
    }

    useEffect(() => {
        initialize();
    }, []);

    return (
        <form>
            <TextInput label="Email" onChange={onChangeEmail} />
            <TextInput label="Password" hidden onChange={onChangePassword} />
            <Button label="login" onClick={login} />
        </form>
    );
};

export default Form;