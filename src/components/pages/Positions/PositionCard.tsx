import styled from 'styled-components';
import React from 'react';
import CustomButton from '../../shared/CustomButton';
import { Link } from 'react-router-dom';

const CustomCard = styled.div`
    border: 2px solid #DCDCDC;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
`;

const CardDescription = styled.div`
    width: 100%;
    height: 100px;
    text-align: center;
    padding-top: 50px;
    font-size: 130%;
    h2{
        padding-top: 50px;
    }
    p{
        padding-top: 0px;
        color: black;
    } 
    text-transform: uppercase;
`;

const Buttons = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: space-evenly;
    padding-bottom: 50px;
`;

const PositionCard = (props) => {
    return (
        <CustomCard>
            <CardDescription>
                <p>{props.Description}</p>
            </CardDescription>
            <Buttons>
                <Link to={`/${props.OpenPositionId}/results`} key={props.OpenPositionId}>
                    <CustomButton >
                        View results
                    </CustomButton>
                </Link>

                <Link to={`quizz/${props.OpenPositionId}`} key={props.OpenPositionId}>
                    <CustomButton>Create Quizz</CustomButton>
                </Link>
            </Buttons>
        </CustomCard>
    );
};
export default PositionCard;