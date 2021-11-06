import { Form } from 'antd';
import styled from 'styled-components';

const CustomForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  h1 {
      color: #fff;
      font-size: 2rem;
    }

  &.ant-form {
      margin: 10px auto;
  }

  .ant-form-item-control-input {
      margin: auto;
      width: 100%;
  }

  .ant-space {
      width: 80%;
      display: flex;
      align-items: center;
  }
`;

export default CustomForm;