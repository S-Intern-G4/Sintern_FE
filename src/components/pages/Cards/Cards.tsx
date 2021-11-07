import Container from '../../shared/Container';
import Navbar from '../../layout/Navbar';
import styled from 'styled-components';
import CategoryCard from './CategoryCard';
import React, { useEffect, useState } from 'react';

import { ApiEndpoints } from '../../../configs/api/endpoints';

import { Link } from 'react-router-dom';
import ApiService from '../../../services/apiService';
import { Domain, DomainsResponseModel } from '../../../interfaces/DomainsResponseModel';

// const cards =[{
//     DomainName: 'Computers Science',
//     ImageSRC: 'https://www.cud.ac.ae/sites/default/files/programs/2020/program-bachelor-of-science-in-computer-science-1920x1080.jpg',
//     Description: 'jobs, internships, part-time-jobs'
// },{
//     DomainName: 'Banking and Finance',
//     ImageSRC: 'https://www.linklegal.in/img/upload/areas/383_07_Apr_2017_06_16_46.jpg',
//     Description: 'jobs, internships, part-time-jobs'
// },{
//     DomainName: 'Architucture and Design',
//     ImageSRC: 'https://www.ndesconstruction.com/images/architecture-design/1.jpg',
//     Description: 'jobs, internships, part-time-jobs'
// },{
//     DomainName: 'Physical Therapy',
//     ImageSRC: 'https://aurageea-therapy.webnode.ro/_files/200000076-b27fbb3797/450/Cabinet-de-kinetoterapie-Elisabeta-Vacarescu-Dragasani-2069.jpg',
//     Description: 'jobs, internships, part-time-jobs'
// },{
//     DomainName: 'Photography and Videography',
//     ImageSRC: 'https://all-things-photography.com/wp-content/uploads/2018/02/Videography-Main-Image.jpg',
//     Description: 'jobs, internships, part-time-jobs'
// },
// {
//     DomainName: 'Journalism',
//     ImageSRC: 'https://s3.amazonaws.com/media.muckrack.com/mrdaily/images/2015/02/24/shutterstock_47721460.jpg.800x0_q85_autocrop.jpg',
//     Description: 'jobs, internships, part-time-jobs'
// }];

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


const Cards = (props) => {

    const [domains, setDomains] = useState([] as Domain[]);
    
    useEffect(() => {
        ApiService.get<Domain[]>(ApiEndpoints.domains)
        .then((data) => {
            console.log(data.data)
            
            setDomains(data.data)
        })
        
    }, [])

    if(domains){
       
        return (
        
            <Container>
                <Navbar />
                <CategoryContainer>
                        <CardsContainer>

                            {domains.map((value, index)=>(
                                <Link to={`/feed/${value.domainType}`} key={value.domainType + value.description}>
                                    
                                    <CategoryCard
                                        
                                        DomainName={value.domainType}
                                        Description={value.description}
                                    />
                                </Link>

                            ))}

                        </CardsContainer>
                </CategoryContainer>
            </Container>
        );
    }
    else{
        return(
            <div>Loading...</div>
        )
    }
};
  
  
export default Cards;



 