import React from 'react';
import HomeQuestion from '../../components/buttonhomequestion/index';
// import image_1 from '../../../public/images/smile-décli-ux@2x.png';
// import image_2 from '../../../public/images/smile-décli-webmarket@2x.png';
// import badge from '../../../public/images/Card.png';

const Home = () => 
    <section className="home-section">
        <div className="home-section-image-1"></div>
        <div className="home-section-image-2"></div>
        <div className="home-section-badge">
            <div className="home-section-badge-image"></div>
            <h1>Badge pour émarger</h1>
        </div>
        <HomeQuestion></HomeQuestion>
    </section>;

export default Home;