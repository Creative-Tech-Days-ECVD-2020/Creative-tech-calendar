import React from 'react';
import { Link } from "react-router-dom";

const HomeButton = ({name, route}) => (
  <button className="home-section-button">
    <Link to={route} className="link">
      <span>{name}</span>
      <img src="../images/Polygon_1.png"/>
    </Link>
  </button>
);

export default HomeButton;