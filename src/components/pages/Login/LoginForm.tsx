import { Form } from 'antd';
import styled from 'styled-components';
import CustomForm from '../../shared/CustomForm';

const LoginForm = styled(CustomForm)`
  &:after {
    border-radius: 10px;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    opacity: 1;
    transition: all 1s;
    -webkit-transition: all 1s;
    z-index: ;
  }

  .ant-form-item-control, 
  .ant-form-item-label {
    z-index: 2;
  }

  .ant-form-item-required {
    color: #fff;
  }

  
`;

export default LoginForm;