import React, {useState} from 'react';
import './App.css';
import MainContent from './components/MainContent';

import SearchBar from './components/SearchBar';
import Paging from './components/pagination';

// const movieId = 'https://www.omdbapi.com/?i=tt0371746&plot=full&apikey=cb289192'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      whatPage: 1,
      searchedWord: '',
    }
  }

  saveToState = (props, sec) =>{
    this.setState({ data: props })
    this.setState({ searchedWord: sec })
  }
  saveCurrentPage = (page)=>{
    this.setState({whatPage: page}, ()=>{
      this.handlePage() 
    })
  }

  handlePage = async (page) => {
    const {whatPage, searchedWord} = this.state;
    console.log('whatPage',whatPage)
    const url =  `https://www.omdbapi.com/?s=${searchedWord}&page=${whatPage}&apikey=cb289192`;

    const resolve = await fetch(url);
    const data = await resolve.json();
    
    this.setState({ data: data })
  }

  // selectMovie = (props) => {

  // }


  render() {
      return (
        <div className="wrapper">
          <SearchBar
            currentPage={this.state.whatPage}
            saveToState={this.saveToState}
            page={this.state}
            saveCurrentPage={this.saveCurrentPage}
          />
          <MainContent data={this.state.data} selectMovie={this.selectMovie}/>
        </div>
      )
  }
}

export default App;
