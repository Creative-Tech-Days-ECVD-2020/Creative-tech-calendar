import React from 'react';
import HomeQuestion from '../../components/buttonhomequestion/index';
// import image_1 from '../../../public/images/smile-décli-ux@2x.png';
// import image_2 from '../../../public/images/smile-décli-webmarket@2x.png';
// import badge from '../../../public/images/Card.png';

const Home = () => 
    <section class="home-section">
        <div class="home-section-image-1"></div>
        <div class="home-section-image-2"></div>
        <div class="home-section-badge">
            <div class="home-section-badge-image"></div>
            <h1>Badge pour émarger</h1>
        </div>
        <HomeQuestion class="home-section-question"></HomeQuestion>
    </section>;

export default Home;