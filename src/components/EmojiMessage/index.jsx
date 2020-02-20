import React from 'react';
import { MessageTitle, EmojiMessageContent, EditSignatureLink } from './style';

const EmojiMessage = ({ text, status, sign }) => (
  <EmojiMessageContent>
    <img src={`images/smile-${status}.png`} alt={`Emoji ${status}`}/>
    <MessageTitle>{text}</MessageTitle>
    {sign ? <EditSignatureLink to="/sign-record">Modifier ma signature</EditSignatureLink> : null}
  </EmojiMessageContent>
);

export default EmojiMessage;
