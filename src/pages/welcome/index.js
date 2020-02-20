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
        <div className="left-footer">
            <p>SALLE</p>
            <p>202</p>
        </div>
        <div className="right-footer">
            <p>Dataviz</p>
            <p>Intervenant - Cristiano</p>
            <p>9 - 12h</p>
        </div>
    </div>

</section>;

export default Welcome;
