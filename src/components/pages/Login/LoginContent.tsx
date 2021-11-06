import styled from 'styled-components';
import MainContent from '../../shared/MainContent';
import login_background from '../../../assets/images/login_background.jpg'

const LoginContent = styled(MainContent)`
  background-image: url(${login_background});
  background-position: center;
  background-size: cover;

  .ant-card {
    background: transparent;
  }

  .ant-card-head-title, p {
    z-index: 2;
    color: #fff;
  }

  .ant-card-head-title {
    font-size: 2rem;
    font-weight: bold;
  }
  
`;

export default LoginContent;