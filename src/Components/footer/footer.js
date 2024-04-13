import React from 'react';
import { FaAddressBook, FaPhone, FaViber, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_icons'>
        <p className='footer_icon'><FaViber size={30} /></p>
        <p className='footer_icon'><FaWhatsapp size={30} /></p>
      </div>
      <div className="footer-content">
        <div className="quick_links">
          <p>Технологии в ваших руках, инженерия в наших.</p>
        </div>
        <div className="contact_info">
        <p className='contact_info_phone'><FaPhone size={25} /> +7 961 822 92 04</p>
          <p className='contact_info_email'><FaAddressBook size={25} /> Владикавказ</p>
          {/* <p className='contact_info_address'><FaAddressBook size={15} /> Ваш адрес здесь</p> */}
        </div>
      </div>
      {/* <div className="copyright">
        <p>&copy; VKENGINEERING. Все права защищены.</p>
      </div> */}
    </footer>
  );
};

export default Footer;
