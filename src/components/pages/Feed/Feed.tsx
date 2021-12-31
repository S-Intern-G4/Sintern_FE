import React, { useContext, useEffect, useState } from 'react';
import FeedContainer from './FeedContainer';
import FeedComponent from './FeedComponent';
import Navbar from '../../layout/navbar/Navbar';
import Container from '../../shared/Container';
import ApiService from '../../../services/apiService';
import { OpenPosition } from '../../../interfaces/OpenPositions';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';


const Feed = () => {
    const { domain } = useParams();
    const [openPositions, setOpenPositions] = useState<OpenPosition[]>([]);
    const { id, type } = useContext(UserContext);
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        ApiService.get<any>(ApiEndpoints.openPositions + '/' + domain)
            .then((data) => {
                setOpenPositions(data.data);
            });
    }, []);

    useEffect(() => {
        if (id) {
            if (type === 'student') {
                ApiService.get<any>(ApiEndpoints.students(id))
                    .then(({ data }) => {
                        console.log('STUDENT DATA', data);
                        setUserEmail(data.email);
                    })
            } else {
                ApiService.get<any>(ApiEndpoints.companies(id))
                    .then(({ data }) => {
                        setUserEmail(data.email);
                    });
            }
        }
    }, [id]);

    return (
        <Container>
            <Navbar />
            <FeedContainer>
                {openPositions.map((value, key) => (
                    <FeedComponent
                        companyLogo={value.companyLogo}
                        key={key}
                        name={value.name}
                        department={value.department}
                        companyName={value.companyName}
                        description={value.description}
                        numberOfMaxStudents={value.availablePositions}
                        id={value.id}
                        userEmail={userEmail}
                    >
                    </FeedComponent>
                ))}
            </FeedContainer>
        </Container>
    );
};

export default Feed;