import React, { Component } from 'react';
import Logo  from './logo';
import navBar  from './navbar';
import searchBar from './searchbar';
import recentPosts from './recentposts';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>React Redux Router</h2>
        <Logo/>
        <navBar/>
        <searchBar/>
        <recentPosts/>
      </div>
    );
  }
}
