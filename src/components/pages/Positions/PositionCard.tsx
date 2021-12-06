import styled from 'styled-components';
import React from 'react';

interface PositionCardProps{
    Description: string;
}


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

const PositionCard = ({Description}: PositionCardProps) => {
    return(
        <CustomCard>
            <CardImage>
                
            </CardImage>

            <CardDescription>
                <p>{Description}</p>
            </CardDescription>
       
        </CustomCard> 
    );
};
export default PositionCard;