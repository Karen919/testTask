import React, { useState, useEffect, useRef } from 'react';
import Cards from './Cards';
import Popup from './Popup';
import Search from './Search';

function Main() {
  const [data, setData] = useState([]);
  const [cards, setCards] = useState([]);
  const [popupContentTitle, setPopupContentTitle] = useState('');
  const [popupContentText, setPopupContentText] = useState('');
  const [searchText, setSearchText] = useState('');
  const popupRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Karen919/new/main/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const filteredData = data.filter(value => {
      const searchValue = searchText.toLowerCase();
      const title = value.title.toLowerCase();
      const text = value.text.toLowerCase();
      return title.includes(searchValue) || text.includes(searchValue);
    });

    setCards(filteredData.map((value, index) => (
      <li key={index} className='card'  onClick={() => {
        setPopupContentTitle(value.title);
        setPopupContentText(value.text);
        popupRef.current.style.display = 'block';
      }}>

    <Cards img={value.img} img_2x = {value.img_2x} tags ={value.tags} title ={value.title} autor ={value.autor} date={value.date} views={value.views} text={value.text}/>
      </li>
    )));
  }, [data, searchText]);

  function handleClickOutside(event) {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
        popupRef.current.style.display = 'none';
    }
  }

  return (
    <React.Fragment>
      <Search searchRef={searchRef} setSearchText={setSearchText} searchText={searchText}/>
      <ul className='cards_ul'>{cards}</ul>
      <Popup popupRef={popupRef} popupContentTitle={popupContentTitle} popupContentText={popupContentText} />
      </React.Fragment>
  );
}

export default Main;



