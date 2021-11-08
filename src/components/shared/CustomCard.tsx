import styled from 'styled-components';
import { Card } from 'antd';

const CustomCard = styled(Card)`
  width: 30%;
  @media (max-width: 1860px) {
    width: 40%;
  }
  @media (max-width: 1024px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;

export default CustomCard;