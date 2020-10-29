import React from 'react';
// import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import "../App.css"
import Movie from './Movie';

// const handlePage = async (page) => {
//   const {whatPage, searchedWord} = this.state;
//   const movieId = `https://www.omdbapi.com/?i=${tt0371746}&plot=full&apikey=cb289192`
//   // const url =  `https://www.omdbapi.com/?s=${searchedWord}&page=${whatPage}&apikey=cb289192`;

//   const resolve = await fetch(url);
//   const data = await resolve.json();
// }

 function MainContent (props) {
  const {Search} = props.data;
  if (props.data.length !== 0) {
    return ( 
      <div className="main-poster">
        {
          Search.map((i, idx)=>{
            return (
              <div key={idx } className="movie" >
                  <img src={i.Poster} />
                <div>Title: {i.Title}</div>
                <div>Year: {i.Year}</div>
                <div>Type: {i.Type}</div>
                <Movie id={i.imdbID} />
                {}
              </div>
            )
          })
        }
      </div>
    )
  } else {
    return (
      <div>Search for movies</div>
    )  
  }
          
}
export default MainContent;