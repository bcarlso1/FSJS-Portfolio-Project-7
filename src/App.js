import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import apiKey from './config';
import { BrowserRouter, Route, Link } from 'react-router-dom';


 export default class App extends Component {
    
  constructor() {
    super();
    this.state = {
      pics: [],
      loading: true
    };
  }

  componentDidMount() {
      fetch(<apiKey />)
      .then(response => response.json())
      .then(responseData => {
        this.setStste({ pics: responseData.data })
      })

  }

  render() {
  return (
    <body>
      <BrowserRouter>
      <Route />
      <Link />
      {/* add NavLink */}
      <div class="container">
        <Search />
        <Nav />
        <PhotoContainer />
      </div>
      </BrowserRouter>
    </body>
    );
  }
}

