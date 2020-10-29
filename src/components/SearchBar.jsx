import React, {useState} from 'react';
import "../App.css";

import Paging from './pagination';


export default (props)=>{

  const [search, setSearch] = useState('');
  const {saveToState, currentPage, saveCurrentPage, page} = props;

  const searchMovies = async (e) => {
    e.preventDefault()
    // const page = currentPage;
    const url =  `https://www.omdbapi.com/?s=${search}&page=${currentPage}&apikey=cb289192`;

    const resolve = await fetch(url);
    const data = await resolve.json();
    
    saveToState(data, search)
  }

  
  return (
      <form onSubmit={searchMovies} className="navBar">
        <div className='inner-search'>
          <input type="text" value={search} onChange={(e)=>{
            setSearch(e.target.value)
          }} className="nav-input" placeholder="Search for movies..."/>
          <button type="submit" className="nav-button">Search</button>
        </div>
        <Paging className='form-paging' saveCurrentPage={saveCurrentPage} page={page}/>
      </form>
  )
}