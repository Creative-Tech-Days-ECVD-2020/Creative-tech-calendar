import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MessageTitle = styled.h1`
  line-height: 30px;
  padding-top: 5vh;
  margin: 0;
  font-family: Arial;
  text-align: center;
  font-size: 1.7em;
  color: black;
  padding: 10vh 0;
`;

export const EditSignatureLink = styled(Link)`
  color: #5878FF;
  text-decoration: underline;
  text-align: center;
`;

export const EmojiMessageContent = styled.div`
  width: 60%;
  margin: auto;
  text-align: center;
  margin-top: 15vh;
`;