function Cards({ img, img_2x, tags, title, autor, date, views, text }) {

  return(
    <>
      <img src={img} srcSet={`${img} 1x, ${img_2x} 2x`} alt="img" />
      <p className='main_tags'>{tags}</p>
      <h1 className='main_title'>{title}</h1>
      <ul>
        <li className='main_author'>{autor}</li>
        <li className='main_date_views'>{date}</li>
        <li className='main_date_views'>{views}</li>
      </ul>
      <p className='main_text'>{text}</p>
    </>
  )
}

export default Cards;
