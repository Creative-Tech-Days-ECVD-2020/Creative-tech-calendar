import React from 'react';
import HomeButton from '../../components/HomeButton/index';
import HomeBadge from '../../components/HomeBadge/index';

const AnswerQuestion = () => 
    <section className="home-section">
        <HomeBadge name="Badge pour répondre"></HomeBadge>
        <HomeButton name="émarger"  route="/"></HomeButton>
    </section>;

export default AnswerQuestion;