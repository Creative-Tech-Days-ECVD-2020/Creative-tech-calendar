import React from 'react';
import HomeQuestion from '../../components/buttonhomequestion/index';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
// import image_1 from '../../../public/images/smile-décli-ux@2x.png';
// import image_2 from '../../../public/images/smile-décli-webmarket@2x.png';
// import badge from '../../../public/images/Card.png';

const Home = () => 
    <section className="home-section">
        <div className="home-section-image-1" data-aos="zoom-out-right" data-aos-duration="1000"></div>
        <div className="home-section-image-2" data-aos="zoom-out-left" data-aos-duration="1000"></div>
        <div className="home-section-badge">
            <div className="home-section-badge-image" data-aos="flip-up" data-aos-duration="1000"></div>
            <h1 data-aos="zoom-out-up" data-aos-duration="1000">Badge pour émarger</h1>
        </div>
        <HomeQuestion></HomeQuestion>
    </section>;

export default Home;