import styled from 'styled-components';

export const HeaderContent = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 5vh;
  left: 5%;
  right: 5%;
  
  & img {
    height: 4vh;
  }

  & p {
    font-size: 1.2em;
    letter-spacing: 5px;
  }
`;