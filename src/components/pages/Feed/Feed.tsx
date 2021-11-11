import React, { useEffect, useState } from 'react';
import FeedContainer from './FeedContainer';
import FeedComponent from './FeedComponent';
import Navbar from '../../layout/navbar/Navbar';
import Container from '../../shared/Container';
import ApiService from '../../../services/apiService';
import { OpenPosition } from '../../../interfaces/OpenPositions';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import { useParams } from 'react-router-dom';


const Feed = () => {
    const [openPositions, setOpenPositions] = useState<OpenPosition[]>([]);
    const { domain } = useParams();

    useEffect(() => {
        ApiService.get<any>(ApiEndpoints.openPositions + '/' + domain)
            .then((data) => {
                setOpenPositions(data.data);
            });
    }, []);

    return (
        <Container>
            <Navbar />
            <FeedContainer>
                {openPositions.map((value, key) => (
                    <FeedComponent key={key}
                        name={value.name}
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