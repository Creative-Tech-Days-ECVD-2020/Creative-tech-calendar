import React from 'react';
import { Link } from 'react-router-dom';
import { NavContent, NavItem } from './style';

const Navbar = () => (
  <NavContent>
    <ul>
      <NavItem><Link to="/">Home</Link></NavItem>
      <NavItem><Link to="/authentication">Authentication</Link></NavItem>
      <NavItem><Link to="/authentication-verification">Authentication-verification</Link></NavItem>
    </ul>
  </NavContent>
);

export default Navbar;