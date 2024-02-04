
import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer_icons'>
          <p className='footer_icon'><FaFacebook size={30} /></p>
          <p className='footer_icon'><FaInstagram size={30} /></p>
          <p className='footer_icon'><FaLinkedin size={30} /></p>
    </div>
      <div className="footer-content">
      <div className="quick_links">
            <p>Технологии в ваших руках, инженерия в наших.</p>
        </div>
        <div className="contact_info">
        <p className='contact_info_email'><FaEnvelope size={15}  /> vkengineering@gmail.com</p>
          <p className='contact_info_phone'><FaPhone size={15} /> +374(98)-77-77-77</p>
        </div>
      </div>
      {/* <div className="copyright">
        <p>&copy; VKENGINEERING. Все права защищены.</p>
      </div> */}
    </footer>
    
  );
};

export default Footer;