import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  color: black;
  line-height: 18px;
  text-decoration-line: underline;
`;

export const VerificationContent = styled.div`
  width: 60%;
  margin: auto;
  text-align: center;
  margin-top: 15vh;

  & h1 {
    font-size: 1.5em;
    margin: 10vh 0 10vh 0;
  }

  & a {
    color: #5878FF;
    text-decoration: underline;
  }
`;

export const VerificationWrapper = styled.div`
  width: 90%;
  margin: auto;
`;