import React from 'react';
import { HeaderContent } from './style';

const Header = ({ color }) => (
  <HeaderContent>
    <p>ECV DIGITAL</p>
    <img src={`./images/open-logo-${color}.png`} alt="Open logo"/>
  </HeaderContent>
) 

export default Header;
