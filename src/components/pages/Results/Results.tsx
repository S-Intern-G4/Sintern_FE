import React, { useEffect, useState } from 'react';
import Navbar from '../../layout/navbar/Navbar';
import Container from '../../shared/Container';
import ResultsCard from './ResultsCard';
import ApiService from '../../../services/apiService';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import { useParams } from 'react-router-dom';
import { ResultsInterface } from '../../../interfaces/results/ResultsInterface';
import FeedContainer from '../Feed/FeedContainer';
import { Modal } from 'antd';
import { useHistory } from 'react-router-dom';

const Results = () => {
    const { openPositionId } = useParams();
    const [resultsTest, setResultsTests] = useState<ResultsInterface[]>([]);
    const [err, setErr] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const history = useHistory();

    const handleOk = () => {
        setIsModalVisible(false);
        history.push('/positions');
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        history.push('/positions');
    };

    const getTestResults = () => {
        ApiService.get<any>(ApiEndpoints.getTestResults(openPositionId))
            .then((response) => {
                setResultsTests(response.data);
            }).catch(() => {
                setErr(true);
                setIsModalVisible(true);
            });
    };

    useEffect(() => {
        getTestResults();
    }, []);

    return (
        <Container>
            <Navbar />
            {err == false ?
                <FeedContainer>
                    {resultsTest.map((value, key) => (
                        <ResultsCard
                            key={key}
                            grade={value.grade}
                            fullName={value.fullName}
                            phoneNumber={value.phoneNumber}
                            email={value.email}
                            hasPassed={value.hasPassed}
                        >
                        </ResultsCard>
                    ))}
                </FeedContainer>
                :
                <Modal title='' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <strong><div>There are not any tests taken for this position yet!</div></strong>
                </Modal>
            }

        </Container>
    );
};

export default Results;