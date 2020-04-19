import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Search from './Search';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import apiKey from './config';
// import { BrowserRouter, Route, Link } from 'react-router-dom';


 export default class App extends Component {
    
  constructor() {
    super();
    this.state = {
      pics: [],
      // loading: true
    };
  }

  componentDidMount() {
    console.log({apiKey});  
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs%2Ccats%2Ccomputer&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ pics: responseData.photos.photo})
      })
      .catch(error => {
        console.log('Error fetching', error);
      });

  }



  render() {
    console.log(this.state.pics)
  return (
    <body>
      {/* <BrowserRouter>
      <Route /> */}
      {/* <Link /> */}
      {/* add NavLink */}
      <div class="container">
        <Search />
        <Nav />
        <PhotoContainer data={this.state.pics} />
      </div>
      {/* </BrowserRouter> */}
    </body>
    );
  }
}

