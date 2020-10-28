import React, {useState} from 'react';
import "../App.css";

import Paging from './pagination';


export default (props)=>{

  const [search, setSearch] = useState('');
  const {saveToState, currentPage} = props;

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
        <input type="text" value={search} onChange={(e)=>{
          setSearch(e.target.value)
        }} className="nav-input"/>
        <button type="submit" className="nav-button">Search</button>
      </form>
  )
}