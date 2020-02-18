import React from 'react';
import { Link } from 'react-router-dom';
import { NavContent, NavItem } from './style';

const Navbar = () => (
  <NavContent>
    <ul>
      <NavItem><Link to="/">Login</Link></NavItem>
      <NavItem><Link to="/events">Events</Link></NavItem>
      <NavItem><Link to="/calendar">Calendar</Link></NavItem>
    </ul>
  </NavContent>
);

export default Navbar;