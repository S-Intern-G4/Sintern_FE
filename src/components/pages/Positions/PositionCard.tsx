import styled from 'styled-components';
import React from 'react';
import CustomButton from '../../shared/CustomButton';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface PositionCardProps{
    Description: string;
    Id: string;
}

const theme = {
    blue: {
      default: "#00458B;",
      hover: "#107d9e"
    }
  };

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

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

const PositionCard = (props,{Description,Id}: PositionCardProps) => {
    return(
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

                <Link to={`quizz/${props.id}`} key={props.id}>
                    <CustomButton>Create Quizz</CustomButton>
                </Link>
            </Buttons>
        </CustomCard> 
    );
};
export default PositionCard;