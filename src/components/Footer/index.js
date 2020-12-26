import React, { useState } from 'react';
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';

import Up from '../../assets/img/up.png'

function Footer() {
    const [is_visible] = useState(true);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div>
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Contador de episódios</h5>
                        </div>
                        <div className="col l1 s4 right">
                            {is_visible && (
                                <div onClick={() => scrollToTop()}>
                                    <img src={Up} alt="Voltar ao topo" width='150' />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container white-text">
                        © 2020 Rafael Santana
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer