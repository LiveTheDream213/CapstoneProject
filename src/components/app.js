import React, { Component } from 'react';
import Logo  from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recentposts';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1></h1>
        <h2></h2>
        <Logo/>
        <RecentPosts/>
      </div>
    );
  }
}

