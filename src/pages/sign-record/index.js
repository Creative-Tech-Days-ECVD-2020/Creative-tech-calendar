import React from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { useHistory } from 'react-router-dom';
import { SignRecordContent,SignRecordLabel, SignRecordButtons, SignRecordButton, AcceptContent } from './style';
import OrangeLayout from '../../hocs/orangeLayout';

const SignRecord = () => {
  const router = useHistory();

  return (
    <SignRecordContent>
      <h1>Bienvenue,</h1>
      <h2>Anne OHNIME</h2>
      <h3>ID. 2854923562</h3>
      <h3>M2 UX DESIGN</h3>
      <form>
        <SignRecordLabel>Signer ici</SignRecordLabel>
        <SignatureCanvas canvasProps={{className: 'sigCanvas'}} />
        <AcceptContent>
          <input type="checkbox" name="accept" id="accept"/>
          <label htmlFor="accept">J’accepte de renseigner ma signature pour la 1ère authentification, afin que celle-ci soit stockée pour gagner du temps à chaque émargement.</label>
        </AcceptContent>
      </form>
      <SignRecordButtons>
        <SignRecordButton onClick={() => router.push('/authentication-verification')} >Enregistrer</SignRecordButton>
        <SignRecordButton onClick={() => router.push('/')} highlight={true}>Annuler</SignRecordButton>
      </SignRecordButtons>
    </SignRecordContent>
  )
};

export default OrangeLayout(SignRecord);
