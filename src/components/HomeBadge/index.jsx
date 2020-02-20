import React from 'react';

const HomeBadge = ({name}) => (
    <div>
        <div className="home-section-image-1" data-aos="zoom-out-right" data-aos-duration="1000"></div>
        <div className="home-section-image-2" data-aos="zoom-out-left" data-aos-duration="1000"></div>
        <div className="home-section-badge">
            <div className="home-section-badge-image" data-aos="flip-up" data-aos-duration="1000"></div>
            <h1 data-aos="zoom-out-up" data-aos-duration="1000">{name}</h1>
        </div>
    </div>
);

export default HomeBadge;