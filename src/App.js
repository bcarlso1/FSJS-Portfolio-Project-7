import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Search from './Search';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
// import apiKey from './config';
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
      fetch('http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC')
      // <apiKey />)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ pics: responseData.data })
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

