import styled from 'styled-components';
import { Button } from 'antd';

const CustomButton = styled(Button)`
  background-color: #df7153;
  color: #fff;
  font-size: 1.1rem;
  border: unset;
  height: 40px;
  margin: 5px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index:1;

  &.ant-btn:hover:enabled,
  &.ant-btn:active:enabled,
  &.ant-btn:focus:enabled {
    background-color: #e38368;
    color: #fff;
  }
`;

export default CustomButton;