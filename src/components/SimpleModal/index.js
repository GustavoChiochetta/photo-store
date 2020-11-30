import React from 'react';
import Modal from '@material-ui/core/Modal';
import useStyles from './styles';
import NewCustomerForm from '../NewCustomerForm';

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
    const [modalStyle] = React.useState(getModalStyle);


    const body = (
        <div style={modalStyle} className={styles.paper}>
            <NewCustomerForm closeModal={() => setModalVisible(false)} />
        </div>
    );

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
