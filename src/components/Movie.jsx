import React from 'react';
import "../App.css";

import Modal from "./modal";

export default class Movie extends React.Component {
  constructor() {
    super();
    this.state = {
      imdbID: '',
      movie: [],
    };
  }


  openMovie = () => {
    this.setState({imdbID: this.props}, () =>{
      this.fetchId()
    })
  }

  fetchId = async () => {
    const {imdbID, movie} = this.state;
    console.log('imdbID  asdasd',imdbID.id)  
    const url = `https://www.omdbapi.com/?i=${imdbID.id}&plot=full&apikey=cb289192`
  
    const resolve = await fetch(url);
    const data = await resolve.json();

    this.setState({ movie: data })
    console.log('movie', movie)
  }
  





  render() {

    const {movie} = this.state
    console.log('asdasdasdasda')
    if (this.state.imdbID.length === 0) {
      return (
        <>
        <div onClick={this.openMovie} className="open">></div>
        <Modal data={this.state.movie} />
        <div>asdasdasdasd</div>
        </>
      )
    }
    // else {
    //   return (
    //   ) 
    // }
 }
}