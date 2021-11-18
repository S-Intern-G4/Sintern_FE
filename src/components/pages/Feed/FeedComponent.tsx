import React from 'react';
import styled from 'styled-components';
import { Image } from 'antd';
import CustomButton from '../../shared/CustomButton';

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

const Name = styled.div`
    font-size: 20px;
`;
const Description = styled.div`
    font-size: 20px;
`;
const Department = styled.div`
    font-size: 20px;
`;
const NumberOfMaxStudents = styled.div`
    font-size: 20px;
`;
const CompanyName = styled.div`
    font-size: 20px;
`;

const MyImage = styled(Image)`
    margin: 20px 0px 20px 0px;
`;

const ApplyButton = styled(CustomButton)`
  align-self: flex-end;
`;

const FeedComponent = (props) => {

    return (
        <CardFeed >
            <MyImage
                width={200}
                src={`data:image/jpeg;base64,${props.companyLogo}`}
            />
            <TextCard>
                <CompanyName><strong>Company name:</strong> {props.companyName}</CompanyName>
                <Name><strong>Open position name: </strong>{props.name}</Name>
                <Description><strong>Description:</strong> {props.description}</Description>
                <Department><strong>Department:</strong> {props.department}</Department>
                <NumberOfMaxStudents><strong>Maximum number of students:</strong> {props.numberOfMaxStudents}</NumberOfMaxStudents>
                <ApplyButton onClick={props.showApplyModal}>Apply</ApplyButton>
            </TextCard>
        </CardFeed>
    );
};

export default FeedComponent;

