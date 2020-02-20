import React from 'react';
import AnswerButton from '../AnswerButton/index';
import { Link } from "react-router-dom";

const QuestionSection = () => (
  <section className="home-section-question">
    <Link to="/" className="return-button">Retour</Link>
    <h2>Sur quel sujet souhaites-tu travailler
    <br/>
    pour la “Creative Tech Week” ?</h2>
    <div className="all-questions">
      <AnswerButton name="Borne" route="/question"></AnswerButton>
      <AnswerButton name="Plateforme" route="/question"></AnswerButton>
      <AnswerButton name="Charte Graphique" route="/question"></AnswerButton>
      <AnswerButton name="Stratégie" route="/question"></AnswerButton>
    </div>
    <div className="question-image-1" data-aos="zoom-out-right" data-aos-duration="1000"></div>
  </section>
);

export default QuestionSection;