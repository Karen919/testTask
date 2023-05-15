
function Search ({searchRef,searchText,setSearchText}) {

    return(
        <div className='search'>
        <span className="material-symbols-outlined search_icon" onClick={()=> searchRef.current.classList.toggle('inline')}>search</span> 
        <input type="text" placeholder="Search posts" value={searchText} onChange={e => setSearchText(e.target.value)} ref={searchRef} className='search_input'/>
    </div>
    )
}

export default Search;