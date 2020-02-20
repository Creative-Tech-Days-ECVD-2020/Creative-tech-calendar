import React from 'react';
import HomeQuestion from '../../components/buttonhomequestion/index';

const Home = (props) => 
    <section className="home-section">
        <div className="home-section-image-1" data-aos="zoom-out-right" data-aos-duration="1000"></div>
        <div className="home-section-image-2" data-aos="zoom-out-left" data-aos-duration="1000"></div>
        <div className="home-section-badge">
            <div className="home-section-badge-image" data-aos="flip-up" data-aos-duration="1000"></div>
            <h1 data-aos="zoom-out-up" data-aos-duration="1000">Badge pour émarger</h1>
        </div>
        <HomeQuestion name="La question de la semaine"></HomeQuestion>
    </section>;

export default Home;