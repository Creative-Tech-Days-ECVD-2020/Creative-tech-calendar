import React from 'react';
import EmojiMessage from '../../components/EmojiMessage';
import OrangeLayout from '../../hocs/orangeLayout';
import { BackLink, VerificationWrapper } from './style';

const AuthenticationVerification = () => (
  <VerificationWrapper>
    <BackLink to="/sign-record">&lt; Retour</BackLink>
    <EmojiMessage text="Ta signature a bien été enregistrée !" status="success" sign />
  </VerificationWrapper>
);

export default OrangeLayout(AuthenticationVerification);