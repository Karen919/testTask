import React, { useState, useEffect } from 'react';

function Main() {
    const [data, setData] = useState([]);
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('https://cloud.codesupply.co/endpoint/react/data.json')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setCards(data.map((value,index) =>{
                    return <li key={index} >
                            <picture>
                                <source srcSet= {value.img} media="(max-width: 768px)" />
                                <img src= {value.img_2x} srcSet={value.img} alt="An image" />
                            </picture>
                            <p className='main_tags'>{value.tags}</p>
                            <h1>{value.title}</h1>
                            <span>{value.autor}</span>
                            <span className='main_date_views'>{value.date}</span>
                            <span className='main_date_views'>{value.views}</span>
                            <p className='main_text'>{value.text}</p>
                        </li>
            }));
        })
        .catch(error => console.error(error));
    }, []);

  return (
    <div>
        <ul className='cards_ul'>
        {cards}
        </ul>
    </div>
  );
}

export default Main;
