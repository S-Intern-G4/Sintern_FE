import Container from '../../shared/Container';
import Navbar from '../../layout/navbar/Navbar';
import styled from 'styled-components';
import PositionCard from './PositionCard';
import React, { useContext, useEffect, useState } from 'react';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import { Link } from 'react-router-dom';
import ApiService from '../../../services/apiService';
import { UserContext } from '../../context/UserContext';

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 400px);
    grid-gap: 40px;
    width: 80%;
    justify-content: center;
    margin: 0 auto;
    padding: 20px 0;
`;

const Positions = () => {
    const [domains, setDomains] = useState([] as any[]);
    const user = useContext(UserContext);

    useEffect(() => {
        if(user.id){
            ApiService.get<any>(ApiEndpoints.positions(user.id))
            .then((data) => {
                setDomains(data.data);
                console.log(data.data)
            });
        }
    }, [user]);
    
    if (domains) {
        return (
            <Container>
                <Navbar />
                
                <CardsContainer>
                    {domains.map((value) => (
                        <Link to={`appliers/${value.id}`} key={value.department}>
                            <PositionCard key={value.department}
                                Description={value.department}
                                Id={value.id}
                            />
                        </Link>
                    ))}
                </CardsContainer>
            </Container>
        );
    }
    else {
        return (
            <div>Loading...</div>
        );
    }
};
export default Positions;



