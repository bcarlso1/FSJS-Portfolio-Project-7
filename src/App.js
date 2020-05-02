import React, {Component} from 'react';
import './App.css';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './Components/Search';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import PageNotFound from './Components/PageNotFound';

// parent component
export default class App extends Component {

        render() {
    
          return (
        
            // routes and components
            // spread (...) operator gets access to props object that contains id and match
            // for search, id is set by the url path

           <BrowserRouter>
              <div class="container">
                  <Search />
                  <Nav title="Nav" /> 
                  <div>
                    <Switch>
                        <Route exact path="/" render={ (props) => <PhotoContainer {...props} id="nature" /> } />
                        <Route path="/mountain" render={ (props) => <PhotoContainer {...props} id={"mountain"}  /> } />
                        <Route path="/lake" render={ (props) => <PhotoContainer {...props} id={"lake"}  /> } />
                        <Route path="/boat" render={ (props) => <PhotoContainer {...props} id={"boat"}  /> } />
                        <Route path="/search/:id" render={ (props) => <PhotoContainer {...props} id={props.match.params.id}  /> } />
                        <Route component={PageNotFound} /> 
                    </Switch> 
                  </div>
              </div>
            </BrowserRouter> 
        
            );
          }
        }

