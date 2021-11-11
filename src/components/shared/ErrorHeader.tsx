import styled from 'styled-components';

const ErrorHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  z-index: 2;
  font-size: 1.1rem;
  margin: 5px auto;
  text-align: center;

  p {
    color: red;
  }
`;

export default ErrorHeader;