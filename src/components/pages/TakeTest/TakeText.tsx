import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Radio } from 'antd';
import ApiService from '../../../services/apiService';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import CustomButton from '../../shared/CustomButton';
import { useParams } from 'react-router-dom';
import Navbar from '../../layout/navbar/Navbar';
import { useHistory } from 'react-router-dom';
import Container from '../../shared/Container';

const TakeTestContainer = styled.div`
  width: 80%;
  margin: 20px auto;
`;

const QuestionContent = styled.div`
  width: 100%;
  margin: 20px auto;
  border: 2px solid #00458B;
`;

const AnswersContainer = styled(Radio.Group)`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const QuestionTitle = styled.h1`
  border-bottom: 2px solid #00458B;
  padding: 3px 10px;
  font-size: 1.5rem;
  background: #00458B;
  color: #fff;
`;

const TakeTest = () => {
  const [testAnswers, setTestAnswers] = useState([]);
  const { applicationId, openPositionId } = useParams();
  const [testQuestions, setTestQuestions] = useState([]);
  const [quizId, setQuizId] = useState(null);
  const history = useHistory();

  useEffect(() => {
    ApiService.get<any>(ApiEndpoints.quizz(openPositionId))
      .then((data) => {
        setTestQuestions(data.data.questions);
        setQuizId(data.data.id);
        const answers = [];
        data.data.questions.forEach(() => {
          answers.push(0);
        });
        setTestAnswers(answers);
      });
  }, []);

  const onChange = (e, index) => {
    const answers = [...testAnswers];
    answers[index] = e.target.value;
    setTestAnswers(answers);
  };

  const handleFinish = () => {
    const answers = testQuestions.map((q, index) => {
      return {
        quizQuestionId: q.id,
        answerIndex: testAnswers[index]
      };
    });
    const payload = {
      quizID: quizId,
      applicationID: applicationId,
      testResponse: answers
    };

    ApiService.post<any, any>(ApiEndpoints.tests, payload)
      .then(() => {
          history.push('/positions');
      });
  };

  return (
    <Container>
      <Navbar />

      <TakeTestContainer>
        {
          testQuestions.map((q, index) => (
            <QuestionContent key={index}>
              <QuestionTitle>Question {index + 1}: {q.question}</QuestionTitle>
              <AnswersContainer onChange={(e) => { onChange(e, index); }} value={testAnswers[index]}>
                <Radio value={1}>{q.answer1}</Radio>
                <Radio value={2}>{q.answer2}</Radio>
                <Radio value={3}>{q.answer3}</Radio>
                <Radio value={4}>{q.answer4}</Radio>
              </AnswersContainer>

            </QuestionContent>
          ))
        }

        <CustomButton onClick={handleFinish}>Finish</CustomButton>

      </TakeTestContainer>

    </Container>
  );
};

export default TakeTest;