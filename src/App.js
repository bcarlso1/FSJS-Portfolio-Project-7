import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Search from './Search';
import Nav from './Nav';
import apiKey from './config.js';
import PhotoContainer from './PhotoContainer';
// import PropTypes from 'prop-types';

 export default class App extends Component {
    
  constructor(props) {
    super(props);
    console.log(this.props)
  //  let name= match.params.name;
    this.state = {
      pics: [],
      loading: true,
      title: "",
      changeURL: props.changeURL

     // query: match.params.mofo
    };
  }

  componentDidMount() {
      this.performSearch();
  }

  performSearch = (query) =>
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          pics: responseData.photos.photo,
          loading: false,
          title: "",
          query: ""
        });
      })
      .catch(error => {
        console.log(this.state.pics);
      })         
        

render() {
    
  return (

   <BrowserRouter>
      <div class="container">
          <Search onSearch={this.performSearch} />
          <Nav title="Nav" />
          <div>
              {
                (this.state.loading)
                 ? <p>Loading...</p>
                 :
            <Switch>
             <Route exact path="/" render={ () => <PhotoContainer title="Cats" data={this.state.pics}  /> } />
               {/* <Route path="/:name" component={PhotoContainer} /> */}
               {/* <Route path="/search/:query" */}
              <Route component={NotFound} />
            </Switch> 
              }
      </div>
      </div>
    </BrowserRouter> 

    );
  }
}

