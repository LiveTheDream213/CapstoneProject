import React, { Component } from 'react';



class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items,
      results: []
    };
    this._handleResults = this._handleResults.bind(this);
  }

  _handleResults(results) {
    this.setState({ results });
  }
  
  

  render() {
    return (
        <div className= 'searchBar'>
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        </div>
    );
  }
}
      
    
  

export default SearchBar; 
