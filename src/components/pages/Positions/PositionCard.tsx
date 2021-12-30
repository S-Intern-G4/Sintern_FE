import styled from 'styled-components';
import React from 'react';


interface PositionCardProps{
    Description: string;
    Id: string;
}
import CustomButton from '../../shared/CustomButton';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
Button.defaultProps = {
  theme: "blue"
};

const CustomCard = styled.div`
    border: 2px solid #DCDCDC;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
`;
const CardImage = styled.div`
    width: 100%;
    height: 150px;
    
    img{
        width: 100%;
        height: 100%;
        
    } 
`;
const CardDescription = styled.div`
    width: 100%;
    height: 150px;
    text-align: center;
    
    h2{
        padding-top: 10px;
    }
    p{
        padding-top: 0px;
        color: black;
    } 
    text-transform: uppercase;
`;

// const PositionCard = ({Description,Id}: PositionCardProps) 

const PositionCard = (props,{Description,Id}: PositionCardProps) => {

    return(
        <CustomCard>
            <Link to={`quizz/${Id}`} key={Id}>
                <Button>Create Quizz</Button>
            </Link>

            <CardDescription>
                <p>{props.Description}</p>
            </CardDescription>
            <Link to={`/${props.OpenPositionId}/results`} key={props.OpenPositionId}>
                <CustomButton >
                    View results
                </CustomButton>
            </Link>

       
        </CustomCard> 
    );
};
export default PositionCard;