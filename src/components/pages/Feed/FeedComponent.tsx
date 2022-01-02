import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Image, Modal } from 'antd';
import CustomButton from '../../shared/CustomButton';
import ApplyModal from './ApplyModal';
import apiService from '../../../services/apiService';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';

const CardFeed = styled.div`
  width: 100%;
  margin: 10px 0px;
  background-color: #2193b0;
  color:black;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const TextCard = styled.div`
  width:50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
`;

const CustomImage = styled(Image)`
    margin: 20px 0px 20px 0px;
`;

const FeedComponent = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { id, type } = useContext(UserContext);
    const [applicationId, setApplicationId] = useState(false);

    const showApplyModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        apiService.post<any, any>(ApiEndpoints.applied, {
            openInternPositionID: props.id,
            studentID: id
        })
            .then(
                (data) => {
                    setApplicationId(data.data.applicationID);
                }
            );
    }, []);

    return (
        <CardFeed >
            <CustomImage
                width={200}
                src={`data:image/jpeg;base64,${props.companyLogo}`}
            />
            <TextCard>
                <p><strong>Company name:</strong> {props.companyName}</p>
                <p><strong>Open position name: </strong>{props.name}</p>
                <p><strong>Description:</strong> {props.description}</p>
                <p><strong>Department:</strong> {props.department}</p>
                <p><strong>Maximum number of students:</strong> {props.numberOfMaxStudents}</p>
                {
                    applicationId === null && type === 'student' &&
                    <CustomButton onClick={showApplyModal}>Apply</CustomButton>
                }
                {
                    applicationId &&
                    <Link to={`/take-test/${props.id}/${applicationId}`}>
                        <CustomButton>Take test</CustomButton>
                    </Link>

                }

                <Modal title={props.companyName}
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <ApplyModal openInternPositionID={props.id} openPositionName={props.name} handleOk={handleOk} />
                </Modal>
            </TextCard>
        </CardFeed>
    );
};

export default FeedComponent;