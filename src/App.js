import React, {Component} from 'react';
import './App.css';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import apiKey from './Components/config.js';
import Search from './Components/Search';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import NotFound from './Components/NotFound';


export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
       pics: [],
       loading: true,
       title: ""
            };
  }

  componentDidMount() {
    this.performSearch();
}


  performSearch = (query="airplane") => 
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
     
    .then(response => response.json())
     .then(responseData => {   
            
        this.setState({ 
                pics: responseData.photos.photo,
                loading: false,
                title: "",
                query: ""
            })
          })
       .catch(error => {
          console.log(this.state.pics);
        });
  
        render() {
    
          return (
        
           <BrowserRouter>
              <div class="container">
                  <Search onSearch={this.performSearch} />
                  <Nav title="Nav" onSelect={this.performSearch} /> 
                  <div>
                      {
                        (this.state.loading)
                         ? <p>Loading...</p>
                         :
                    <Switch>
                    <Route exact path="/" render={ () => <PhotoContainer title="Default" data={this.state.pics} /> } />
                    <Route path="/mountain" render={ () => <PhotoContainer title="Mountain" data={this.state.pics} /> } /> 
                    <Route path="/lake" render={ () => <PhotoContainer title="Lake" data={this.state.pics} /> } /> 
                    <Route path="/boat" render={ () => <PhotoContainer title="Boat" data={this.state.pics} /> } /> 

                       {/* <Route path="/search/:query" */} 
                    <Route component={NotFound} /> */}
                    </Switch> 
                      }
              </div>
              </div>
            </BrowserRouter> 
        
            );
          }
        }

