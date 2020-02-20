import React from 'react';
import { Link } from 'react-router-dom';
import OrangeLayout from '../../hocs/orangeLayout';
import { BackLink, VerificationContent, VerificationWrapper } from './style';

const AuthenticationVerification = () => (
  <VerificationWrapper>
    <BackLink to="/sign-record">&lt; Retour</BackLink>
    <VerificationContent>
      <img src="images/smile-base.png" alt="Smile emoji" />
      <h1>Ta signature a bien été enregistrée !</h1>
      <Link to="/sign-record">Modifier ma signature</Link>
    </VerificationContent>
  </VerificationWrapper>
);

export default OrangeLayout(AuthenticationVerification);