

import React, { useState, useEffect, useRef } from 'react';

function Main() {
  const [data, setData] = useState([]);
  const [cards, setCards] = useState([]);
  const [popupContentTitle, setPopupContentTitle] = useState('');
  const [popupContentText, setPopupContentText] = useState('');
  const [searchText, setSearchText] = useState('');
  const popupRef = useRef(null);

  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://cloud.codesupply.co/endpoint/react/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const filteredData = data.filter(value => {
      const searchValue = searchText.toLowerCase();
      const title = value.title.toLowerCase();
      const text = value.text.toLowerCase();
      return title.includes(searchValue) || text.includes(searchValue);
    });
    setCards(filteredData.map((value, index) => (
      <li key={index} onClick={() => {
        setPopupContentTitle(value.title);
        setPopupContentText(value.text);
        popupRef.current.style.display = 'block';
      }}>
        {/* <picture>
          <source srcSet={value.img} media="(max-width: 768px)" />
          <img src={value.img_2x} srcSet={value.img} alt="An image" />
        </picture> */}
     <img src={value.img}  alt="An image" />

        <p className='main_tags'>{value.tags}</p>
        <h1>{value.title}</h1>
        <span>{value.autor}</span>
        <span className='main_date_views'>{value.date}</span>
        <span className='main_date_views'>{value.views}</span>
        <p className='main_text'>{value.text}</p>
      </li>
    )));
  }, [data, searchText]);

  function closePopup() {
    popupRef.current.style.display = 'none';
    setPopupContentTitle('');
    setPopupContentText('');
  }

  function handleClickOutside(event) {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div>
        <div className='search'>
        <span className="material-symbols-outlined search_icon">search</span> 
        <input type="text" placeholder="Search posts" value={searchText} onChange={e => setSearchText(e.target.value)} className='search_input'/>

        </div>
      <ul className='cards_ul'>
        {cards}
      </ul>
      <div className="popup" ref={popupRef}>
        <span className="material-symbols-outlined popup_close" onClick={closePopup}>close</span>
        <h1 className='popup_title'>{popupContentTitle}</h1>
        <p className='popup_text'>{popupContentText}</p>
      </div>
    </div>
  );
}

export default Main;
