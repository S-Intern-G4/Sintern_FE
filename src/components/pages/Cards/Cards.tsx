import Container from '../../shared/Container';
import Navbar from '../../layout/Navbar';
// import { Card} from 'antd';
import styled from 'styled-components';
import CategoryCard from './CategoryCard';
// import { ApiEndpoints } from '../../../configs/api/endpoints';
import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import apiService from '../../../services/apiService';
import { Link } from 'react-router-dom';


const cards =[{
    DomainName: 'Computers Science',
    ImageSRC: 'https://www.cud.ac.ae/sites/default/files/programs/2020/program-bachelor-of-science-in-computer-science-1920x1080.jpg',
    Description: 'jobs, internships, part-time-jobs'
},{
    DomainName: 'Banking and Finance',
    ImageSRC: 'https://www.linklegal.in/img/upload/areas/383_07_Apr_2017_06_16_46.jpg',
    Description: 'jobs, internships, part-time-jobs'
},{
    DomainName: 'Architucture and Design',
    ImageSRC: 'https://www.ndesconstruction.com/images/architecture-design/1.jpg',
    Description: 'jobs, internships, part-time-jobs'
},{
    DomainName: 'Physical Therapy',
    ImageSRC: 'https://aurageea-therapy.webnode.ro/_files/200000076-b27fbb3797/450/Cabinet-de-kinetoterapie-Elisabeta-Vacarescu-Dragasani-2069.jpg',
    Description: 'jobs, internships, part-time-jobs'
},{
    DomainName: 'Photography and Videography',
    ImageSRC: 'https://all-things-photography.com/wp-content/uploads/2018/02/Videography-Main-Image.jpg',
    Description: 'jobs, internships, part-time-jobs'
},
{
    DomainName: 'Journalism',
    ImageSRC: 'https://s3.amazonaws.com/media.muckrack.com/mrdaily/images/2015/02/24/shutterstock_47721460.jpg.800x0_q85_autocrop.jpg',
    Description: 'jobs, internships, part-time-jobs'
}];

// useEffect(()=>{
//     apiService.get(ApiEndpoints.).then(({data: {}}) => )
// },[]);

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 400px);
    grid-gap: 40px;

    width: 80%;
    justify-content: center;
`
const CategoryContainer = styled(Container)`
    border: 2px solid green;
    justify-content: center;

`


const Cards = () => {
    // const history = useHistory()

    // const handleClick =(DomainName: string)=>{
    //     history.push('/login')
    // }
    return (
        <Container>
            <Navbar />
            <CategoryContainer>
                    <CardsContainer>

                        {cards.map((value, index)=>(
                            <Link to={'/login'} key={index}>
                                <CategoryCard
                                    // onClick={handleClick(value.DomainName)}
                                    key={index}
                                    DomainName={value.DomainName}
                                    ImageSRC={value.ImageSRC}
                                    Description={value.Description}
                                />
                            </Link>
                        ))}

                    </CardsContainer>
            </CategoryContainer>
        </Container>
    );
};
  
  
export default Cards;



 