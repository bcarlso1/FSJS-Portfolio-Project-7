import React, { Component } from 'react';
import apiKey from './config';
import PhotoContainer from './PhotoContainer.js';

export default class Lake extends Component {
    
    constructor() {
      super();
      this.state = {
        pics: [],
        loading: true,
        query: ""
      };
    }

    componentDidMount() {
        this.performSearch();
    }
  
    performSearch = (query="mountain%2Clake%2Cboat") =>
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=lake&per_page=24&format=json&nojsoncallback=1`)
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
                {
                  (this.state.loading)
                   ? <p>Loading...</p>
                   : <PhotoContainer data={this.state.pics} />
                }
            </div>
        )};
    }   