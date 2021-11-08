import React, { useEffect, useState } from 'react';
import FeedContainer from './FeedContainer';
import FeedComponent from './FeedComponent';
import Navbar from '../../layout/navbar/Navbar';
import Container from '../../shared/Container';
import ApiService from '../../../services/apiService';
import { OpenPositions } from '../../../interfaces/OpenPositions';
import { ApiEndpoints } from '../../../configs/api/endpoints';



const Feed = () => {
    const [openPositions,setOpenPositions] = useState([]);

    useEffect(()=>{
        console.log('aici')

        ApiService.get<OpenPositions>(ApiEndpoints.openPositions+'/IT')
            .then((data)=>{
                console.log('acolo')
                console.log(data)
                setOpenPositions(data.data.openPositions);
            });
    }, []);

    return (
        <Container>
            <Navbar />
            <FeedContainer>
                {openPositions.map((value)=>(
                    // eslint-disable-next-line react/jsx-key
                    <FeedComponent name={value.name}
                                   department={value.department}
                                   companyName={value.companyName}
                                   description={value.description}
                                   numberOfMaxStudents={value.availablePositions}
                    />
                ))}
            </FeedContainer>

        </Container>
    );
};

export default Feed;