import React, {Component} from 'react';
import './App.css';
import Home from './Home.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';

 export default class App extends Component {
    
        

  render() {
    
  return (
    <body>
   <BrowserRouter>
      <div class="container">
        <Switch>
         <Route exact path="/" component={Home} />
         <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter> 
    </body>
    );
  }
}

