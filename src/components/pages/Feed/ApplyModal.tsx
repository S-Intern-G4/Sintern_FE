import { Modal } from 'antd';
import React, { useState } from 'react';

const ApplyModal = (props) => {

    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            props.setApplyModalVisibility(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        props.setApplyModalVisibility(false);
    };

    return (
        <Modal
            title="Title"
            visible={props.applyModalVisibility}
            // onOk={handleOk}
            confirmLoading={confirmLoading}
            // onCancel={handleCancel}
        >
            <p>{modalText}</p>
        </Modal>
    );
};

export default Modal ;