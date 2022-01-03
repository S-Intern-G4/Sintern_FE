import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Image, Modal } from 'antd';
import CustomButton from '../../shared/CustomButton';
import ApplyModal from './ApplyModal';
import apiService from '../../../services/apiService';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';

const Position = styled.div`
  width: 100%;
  margin: 10px auto;
  color:black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: 2px solid #00458B;
`;

const PositionTitle = styled.h1`
    width: 100%;
    background: #00458B;
    color: #fff;
    font-size: 1.5rem;
    padding: 3px;
`;

const PositionContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const PositionDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const PositionImage = styled.div`
    width: 30%;
    padding: 20px;
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
        <Position>
            <PositionTitle>{props.name}</PositionTitle>

            <PositionContent>
                <PositionImage>
                    <Image
                        width='100%'
                        src={`data:image/jpeg;base64,${props.companyLogo}`}
                    />
                </PositionImage>


                <PositionDetails>
                    <h2>Details</h2>
                    <p><strong>Company name:</strong> {props.companyName}</p>
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

                </PositionDetails>
            </PositionContent>
        </Position>
    );
};

export default FeedComponent;