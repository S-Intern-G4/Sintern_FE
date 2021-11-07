import styled from 'styled-components';
import MainContent from './MainContent';
import unauthenticated_form_background from '../../assets/images/unauthenticated_form_background.jpg';

const UnauthenticatedPageContent = styled(MainContent)`
  background-image: url(${unauthenticated_form_background});
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

export default UnauthenticatedPageContent;