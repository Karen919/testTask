
function Popup({popupRef,popupContentText, popupContentTitle,}) {

    return (
        <div className="popup" ref={popupRef}>
        <span className="material-symbols-outlined popup_close" onClick={()=>popupRef.current.style.display = 'none'}>close</span>
        <h1 className='popup_title'>{popupContentTitle}</h1>
        <p className='popup_text'>{popupContentText}</p>
      </div>
    )
}

export default Popup;