import styled from 'styled-components';
import React from 'react';

interface CategoryCardProps{
    DomainName: string;
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
    
    h2{
        padding-top: 10px;
    }
    p{
        padding-top: 0px;
        color: black;
    } 
`;

const CategoryCard = ({ DomainName, Description } : CategoryCardProps) => {
    return(
        <CustomCard>
            <CardImage>
                {/* <img src={ImageSRC} alt="example"/> */}
            </CardImage>

            <CardDescription>
                <h2>{DomainName}</h2>
                <p>{Description}</p>
            </CardDescription>
       
        </CustomCard> 
    );
};
export default CategoryCard;