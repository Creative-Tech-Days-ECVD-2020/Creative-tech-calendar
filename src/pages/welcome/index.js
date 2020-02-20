import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => 

<section>

    <div className="welcome-link">
        <Link to="/">&lt; Retour</Link>
    </div>

    <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-center" className="welcome-page-smile"></div>

    <div className="welcome-title">
        <p>Ta signature a bien été enregistrée !</p>
        <p>Tu peux te rendre dans ta salle</p>
    </div>

    <div className="welcome-footer">
        SALLE 202
    </div>

</section>;

export default Welcome;
