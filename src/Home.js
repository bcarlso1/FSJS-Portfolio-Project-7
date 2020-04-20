import React, { Component } from 'react';
import Search from './Search';
import Nav from './Nav';
import apiKey from './config';
import PhotoContainer from './PhotoContainer.js';

export default class Home extends Component {
    
    constructor() {
      super();
      this.state = {
        pics: [],
        loading: true
      };
    }

    componentDidMount() {
        this.performSearch();
    }
  
    performSearch = (query="mountain") =>
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(responseData => {
          this.setState({
            pics: responseData.photos.photo,
            loading: false
          });
        })
        .catch(error => {
          console.log(this.state.pics);
        })

        render() {
                console.log(this.state.pics)
        return (
            <div>
                <Search onSearch={this.performSearch} />
                <Nav />
                {
                  (this.state.loading)
                   ? <p>Loading...</p>
                   : <PhotoContainer data={this.state.pics} />
                }
            </div>
        )};
    }   