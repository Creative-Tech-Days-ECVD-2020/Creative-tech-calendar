import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Login</Link></li>
      <li><Link to="/events">Events</Link></li>
      <li><Link to="/calendar">Calendar</Link></li>
    </ul>
  </nav>
);

export default Navbar;