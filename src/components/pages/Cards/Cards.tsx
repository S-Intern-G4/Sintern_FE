import Container from '../../shared/Container';
import Navbar from '../../layout/navbar/Navbar';
import styled from 'styled-components';
import CategoryCard from './CategoryCard';
import React, { useEffect, useState } from 'react';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import { Link } from 'react-router-dom';
import ApiService from '../../../services/apiService';
import { Domain } from '../../../interfaces/DomainsResponseModel';

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 400px);
    grid-gap: 40px;
    width: 80%;
    justify-content: center;
    margin: 0 auto;
    padding: 20px 0;
`;

const Cards = () => {
    const [domains, setDomains] = useState([] as Domain[]);
    useEffect(() => {
        ApiService.get<Domain[]>(ApiEndpoints.domains)
            .then((data) => {
                setDomains(data.data);
            });

    }, []);
    if (domains) {
        return (
            <Container>
                <Navbar />
                <CardsContainer>
                    {domains.map((value) => (
                        <Link to={`/feed/${value.domainType}`} key={value.domainType + value.description}>
                            <CategoryCard
                                DomainName={value.domainType}
                                Description={value.description}
                                DomainImage={value.domainImage}
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
export default Cards;



