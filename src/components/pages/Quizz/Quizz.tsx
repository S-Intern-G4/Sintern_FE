import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Tooltip, Typography } from 'antd';
import { Radio } from 'antd';
import CustomForm from '../../shared/CustomForm';
import { InfoCircleOutlined } from '@ant-design/icons';
import CustomFormItem from '../../shared/CustomFormItem';
import UnauthenticatedForm from '../../shared/UnauthenticatedForm';
import ApiService from '../../../services/apiService';
import { ApiEndpoints } from '../../../configs/api/endpoints';
import CustomButton from '../../shared/CustomButton';
import { Question, QuizzInterface } from '../../../interfaces/quizz/QuizzInterface';
import { useParams } from 'react-router-dom';
import ErrorHeader from '../../shared/ErrorHeader';


const QuizzContainer = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 80px);
  width: 80%;
  margin: 0 auto;

`;

const QuizzContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow-y: scroll;
`;

const MyQuestion = styled.div`
  width: 70%;
  margin: 10px;
`;

const MyFeedback = styled.div`
  width: 70%;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const InputAnswer = styled(Input)`
  width: 100%;
`;

const MyAnswer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;

const MyRadioGroup = styled(Radio.Group)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyCustomFormItem=styled(CustomFormItem)`
  height: auto;
`;

const Quizz = () => {
    const [form] = UnauthenticatedForm.useForm();
    const [questions] = useState<Question[]>([]);
    const [radioValue, setRadioValue] = useState(1);
    const [numberOfQuestions,setNumberOfQuestions] = useState(0);
    const [isCreateQuizzButtonDisabled,setIsCreateQuizzButtonDisabled] = useState(false);
    const [successHeader, setSuccessHeader] = useState('');
    const [apiError, setApiError] = useState('');
    const { openInternPositionId } = useParams();

    const radioOnClick = e => {
        setRadioValue(e.target.value);
    };

    const addOneQuestion = values => {
        const requestValues = { ...values };
        setNumberOfQuestions(numberOfQuestions + 1);

        questions[questions.length] = {
            'question':requestValues.question,
            'answer1':requestValues.answer1,
            'answer2':requestValues.answer2,
            'answer3':requestValues.answer3,
            'answer4':requestValues.answer4,
            'correctAnswerIndex':Number.parseInt(radioValue.toString())
        };
    };

    const onClicCreateQuizz = () => {
        const quizz ={
            quizzQuestion:questions,
            openInternPositionID:openInternPositionId
        };
        ApiService.post<any,QuizzInterface>(ApiEndpoints.addQuizz, quizz)
            .then(()=>{
                setIsCreateQuizzButtonDisabled(true);
                setSuccessHeader('Successfully added');
            }).catch((error)=>{
            setApiError(error.errorMessages);
            setIsCreateQuizzButtonDisabled(false);
        });
    };

    return (
        <QuizzContainer>
            <QuizzContent>
                <h1>Create a Quizz</h1>
                <CustomForm name='basic'
                            form={form}
                            onFinish={(value)=>{
                                addOneQuestion(value);
                                form.resetFields();
                            }}
                            initialValues={{
                                question:'',
                                answer1:'',
                                answer2:'',
                                answer3:'',
                                answer4:''
                            }
                            }

                >
                    <SuccessHeader>
                        <p>{successHeader}</p>
                    </SuccessHeader>

                    <ErrorHeader>
                        <p>{apiError}</p>
                    </ErrorHeader>

                    <MyQuestion>
                        <MyCustomFormItem
                            name='question'
                            rules={[
                                { min: 2, max: 100, message: 'Question should have between 2 and 100 characters' }
                            ]}
                            hasFeedback
                        >
                            <InputAnswer
                                placeholder='Question'
                                suffix={
                                    <Tooltip title='Question should have between 2 and 100 characters'>
                                        <InfoCircleOutlined style={{ color: '#1890ff' }} />
                                    </Tooltip>
                                }
                            />
                        </MyCustomFormItem>
                    </MyQuestion>

                    <MyRadioGroup name='radioGroup'  defaultValue={1} >
                        <MyAnswer>
                            <Radio value={1} onClick={radioOnClick}/>
                            <MyCustomFormItem
                                name='answer1'
                                rules={[
                                    { min: 2, max: 100, message: 'Answer1 should have between 2 and 100 characters' }
                                ]}
                                hasFeedback
                            >
                                <InputAnswer
                                    placeholder='Answer1'
                                    suffix={
                                        <Tooltip title='Answer1 should have between 2 and 100 characters'>
                                            <InfoCircleOutlined style={{ color: '#1890ff' }} />
                                        </Tooltip>
                                    }
                                />
                            </MyCustomFormItem>
                        </MyAnswer>

                        <MyAnswer>
                            <Radio value={2} onClick={radioOnClick}/>
                            <MyCustomFormItem
                                name='answer2'
                                rules={[
                                    { min: 2, max: 100, message: 'Answer2 should have between 2 and 100 characters' }
                                ]}
                                hasFeedback
                            >
                                <InputAnswer
                                    placeholder='Answer2'
                                    suffix={
                                        <Tooltip title='Answer2 should have between 2 and 100 characters'>
                                            <InfoCircleOutlined style={{ color: '#1890ff' }} />
                                        </Tooltip>
                                    }
                                />
                            </MyCustomFormItem>
                        </MyAnswer>

                        <MyAnswer>
                            <Radio value={3} onClick={radioOnClick}/>
                            <MyCustomFormItem
                                name='answer3'
                                rules={[
                                    { min: 2, max: 100, message: 'Answer3 should have between 2 and 100 characters' }
                                ]}
                                hasFeedback
                            >
                                <InputAnswer
                                    placeholder='Answer3'
                                    suffix={
                                        <Tooltip title='Answer3 should have between 2 and 100 characters'>
                                            <InfoCircleOutlined style={{ color: '#1890ff' }} />
                                        </Tooltip>
                                    }
                                />
                            </MyCustomFormItem>
                        </MyAnswer>

                        <MyAnswer>
                            <Radio value={4} onClick={radioOnClick}/>
                            <MyCustomFormItem
                                name='answer4'
                                rules={[
                                    { min: 2, max: 100, message: 'Answer4 should have between 2 and 100 characters' }
                                ]}
                                hasFeedback
                            >
                                <InputAnswer
                                    placeholder='Answer4'
                                    suffix={
                                        <Tooltip title='Answer4 should have between 2 and 100 characters'>
                                            <InfoCircleOutlined style={{ color: '#1890ff' }} />
                                        </Tooltip>
                                    }
                                />
                            </MyCustomFormItem>
                        </MyAnswer>
                    </MyRadioGroup>

                    <CustomButton htmlType='submit'> Add question </CustomButton>
                </CustomForm>

                <MyFeedback>
                    <Typography>You added {numberOfQuestions} questions to the test </Typography>
                    <CustomButton onClick={onClicCreateQuizz} disabled={isCreateQuizzButtonDisabled} > Create quizz </CustomButton>
                </MyFeedback>

            </QuizzContent>
        </QuizzContainer>
    );
};

export default Quizz;

const SuccessHeader = styled(ErrorHeader)`
  p {
    color: #009900;
  }
`;