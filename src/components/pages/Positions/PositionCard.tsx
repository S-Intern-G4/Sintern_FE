import styled from 'styled-components';
import React from 'react';
import CustomButton from '../../shared/CustomButton';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';


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
    text-align: center;
    
    h2{
        padding-top: 10px;
    }
    p{
        padding-top: 0px;
        color: black;
    } 
`;

const PositionCard = (props) => {

    return(
        <CustomCard>
            <CardImage>
            </CardImage>

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