import React from 'react';

import './Footer.css';
import AteaTampa from '../assets/AteaTampa.png';

const Footer = () => {
  return (
    <div>
        <footer className='site-footer'>
            <div className='box'>
                <div className='content'>

                    <div className="logo">
                        <img src={AteaTampa} alt="logotipo" />
                    </div>

                    <div className="e-mail">
                        <p><strong>E-Mail:</strong><br />contatoateatampa@gmail.com</p>
                    </div>

                    <div className="number">
                        <p><strong>Contato</strong><br />(11) 97717-8338</p>
                    </div>

                    <div className="socials">
                        <p><strong>Instagram:</strong><br /> @ate_a_tampa</p>
                    </div>

                    <div className="icons">
                        <a href="#"><i className='fab fa-whatsapp'></i></a>
                        <a href="#"><i className='fab fa-instagram'></i></a>
                        <a href="#"><i className='fab fa-facebook'></i></a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer