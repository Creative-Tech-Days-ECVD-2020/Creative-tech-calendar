import styled from 'styled-components';

export const SignRecordTitle = styled.h1`
  line-height: 30px;
  padding-top: 5vh;
  margin: 0;
  font-family: Arial;
  text-align: center;
  font-size: 1.3em;
  color: black;
`;

export const SignRecordContent = styled.div`
  width: 70%;
  margin:auto;
  & h2 {
    font-family: Noe Display;
  }
  & h2 + h3 {
    padding-top: 5vh;
  }

  & h3 {
    font-weight: 400;
    letter-spacing: 5px;
  }

  & h2, h3 {
    margin: 0;
    text-align: center;
  }
`;

export const SignRecordLabel = styled.label`
  display: block;
  padding-top: 10vh;
  padding-bottom: 1vh;
  font-weight: bold;
  text-transform: uppercase;
`;

export const SignRecordButtons = styled.div`
  display: flex;
  justify-content: space-between; 
  width: 50%;
  margin: 4vh auto;
` ;

export const AcceptContent = styled.div`
  display: flex;
  margin-top: 2vh;
  align-items: flex-start;
  
  & label {
    font-weight: 300;
    font-size: 0.9em;
  }

  & input {
    margin-right: 10px;
  }
`;

export const SignRecordButton = styled.button(({ highlight }) => `
  width: 50%;
  cursor: pointer;
  letter-spacing: 2px;
  background: ${highlight ? 'transparent': '#5878FF'};
  color: ${highlight ? '#5878FF': 'white'};
  text-transform: uppercase;
  padding: 10px 0px;
  width: 47%;
  font-weight: 500;
  border: 1px solid #5878FF;
  border-radius: 10px;

  &:disabled {
    background: rgb(88,120,255, .5);
  }
`);
