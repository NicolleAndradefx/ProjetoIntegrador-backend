import React from 'react';
 
import './Footer.css';
 
import AteaTampaFooter from "../assets/AteaTampaFooter.png";
 
const Footer = () => {
  return (
        <footer className='site-footer'>
                <div className='content'>
 
                    <div className="logofooter">
                        <img src={AteaTampaFooter} alt="logotipo" />
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
        </footer>
 
  )
}
 
export default Footer;