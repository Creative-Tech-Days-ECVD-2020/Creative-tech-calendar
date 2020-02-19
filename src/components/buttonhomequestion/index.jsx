import React from 'react';
import { Link } from 'react-router-dom';

const HomeQuestion = () => (
  <button to="/" className="home-section-question">
    <span>La question de la semaine</span>
    <img src="../images/Polygon_1.png"/>
  </button>
);

export default HomeQuestion;