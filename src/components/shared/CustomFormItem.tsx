import { Form } from 'antd';
import styled from 'styled-components';


const CustomFormItem = styled(Form.Item)`
  width: 100%;
  display: block;
  height: 80px;
  flex-direction: column;
  z-index: 1;
  margin: 0;

  label {
    color: #fff;
  }

  .ant-form-item-label {
    display: flex;
  }

  .ant-form-item-control {
    width: 100%;

    &.ant-form-item-control-input {
      display: flex;
      flex-direction: column;
    }
  }

  .ant-picker {
    width: 100%;
  }
`;

export default CustomFormItem;