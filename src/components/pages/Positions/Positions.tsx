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
    const { id } = useContext(UserContext);

    useEffect(() => {
        if(id){
            ApiService.get<any>(ApiEndpoints.positions(id))
            .then((data) => {
                setDomains(data.data);
            });
        }
    }, [id]);
    
    if (domains) {
        return (
            <Container>
                <Navbar />
                
                <CardsContainer>
                    {domains.map((value, index) => (
                        <Link to={`appliers/${value.id}`} key={value.id}>
                            <PositionCard
                                Description={value.department}
                                Id={value.id}
                                OpenPositionId={value.id}
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



