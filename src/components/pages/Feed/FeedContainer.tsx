import styled from 'styled-components';

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 70%;
  @media (max-width:1000px){
    width:95%;
  };
  overflow-y:scroll;
`;

export default FeedContainer;
