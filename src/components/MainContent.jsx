import React from 'react';
import "../App.css"

 function MainContent (props) {
  
  const {Search} = props.data;
  console.log('this is props from mainContent',props.data)  
  if (props.data.length !== 0) {
    return ( 
      <div className="main-poster">
        {
          Search.map((i, idx)=>{
            return (
              <div key={idx } className="movie">
                <img src={i.Poster} />
                <div>Title: {i.Title}</div>
                <div>Year: {i.Year}</div>
                <div>Type: {i.Type}</div>
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