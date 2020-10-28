import React, {useState} from 'react';
import './App.css';
import MainContent from './components/MainContent';

import SearchBar from './components/SearchBar';
import Paging from './components/pagination';

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
  saveCurrentPage = (props)=>{
    this.setState({whatPage: props})
    console.log('this is current page',this.state.whatPage)
    this.handlePage()
  }

  handlePage = async (e) => {
    const {whatPage, searchedWord} = this.state;
    const url =  `https://www.omdbapi.com/?s=${searchedWord}&page=${whatPage}&apikey=cb289192`;

    const resolve = await fetch(url);
    const data = await resolve.json();
    
    this.setState({ data: data })
    console.log('this is state page ', this.state.whatPage)
  }



  render() {
      return (
        <div className="wrapper">
          <SearchBar currentPage={this.state.whatPage} saveToState={this.saveToState} />
          <MainContent data={this.state.data}/>
          <Paging  saveCurrentPage={this.saveCurrentPage} page={this.state}/>
        </div>
      )
  }
}

export default App;
