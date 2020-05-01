import React, {Component} from 'react';
import './App.css';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './Components/Search';
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import NotFound from './Components/NotFound';

//  FIX LOADING
// FIX SEARCH NOW THAT APP DOESNT lOAD PHOTOS
export default class App extends Component {
  
        render() {
    
          return (
        
           <BrowserRouter>
              <div class="container">
                  <Search onSearch={this.performSearch} />
                  <Nav title="Nav" /> 
                  <div>
                       {/*  {
                       (this.state.loading)
                         ? <p>Loading...</p>
                         :  */}
                    <Switch>
                    <Route exact path="/" render={ (props) => <PhotoContainer {...props} id={props.match.params.id} /> } />
                    <Route exact path="/:id" render={ () => <PhotoContainer /> } />
                    {/* <Route path="/mountain" render={ () => <PhotoContainer title="Mountain" data={this.state.pics} changeURL="mountain" /> } /> 
                    <Route path="/lake" render={ () => <PhotoContainer title="Lake" data={this.state.pics} /> } /> 
                    <Route path="/boat" render={ () => <PhotoContainer title="Boat" data={this.state.pics} /> } />  */}

                       {/* <Route path="/search/:query" */} 
                    <Route component={NotFound} /> */}
                    </Switch> 
                   //   }
              </div>
              </div>
            </BrowserRouter> 
        
            );
          }
        }

