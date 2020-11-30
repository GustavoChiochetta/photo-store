import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import useStyles from './styles';
import NewCustomerForm from '../NewCustomerForm';
import FirebaseService from '../../services/firebase';

const rand = () => {
    return Math.round(Math.random() * 20) - 10;
}

const getModalStyle = () => {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const SimpleModal = ({ modalVisible, setModalVisible }) => {
    const styles = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [isLogged, setIsLogged] = useState(false);

    const userIsLogged = async () => {
        const user = await FirebaseService.userIsLogged();

        setIsLogged(!!user);
    };

    const body = (
        <div style={modalStyle} className={styles.paper}>
            {isLogged ? (<NewCustomerForm closeModal={() => setModalVisible(false)} />) : (
                <div>Faça login antes</div>
            )}
        </div>
    );

    useEffect(() => {
        userIsLogged();
    }, []);

    return (
        <Modal
            open={modalVisible}
            onClose={() => setModalVisible(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
    );
};

export default SimpleModal;
