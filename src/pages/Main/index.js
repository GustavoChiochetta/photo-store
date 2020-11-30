import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import SimpleModal from '../../components/SimpleModal';
import CustomerTable from '../../components/CustomerTable';

const Main = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <div>
            <NavBar openModal={setModalVisible} />
            <SimpleModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <CustomerTable />
        </div>

    );
};

export default Main;
