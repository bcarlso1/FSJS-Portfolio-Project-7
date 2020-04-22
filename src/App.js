import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Search from './Search';
import Nav from './Nav';
import Mountain from './mountain';
import Lake from './lake';
import Boat from './boat';
import Home from './Home';


 export default class App extends Component {
    
        

  render() {
    
  return (
    <body>
   <BrowserRouter>
      <div class="container">
          <Search onSearch={this.performSearch} />
          <Nav title="Nav"/>
            <Switch>
              <Route exact path="/" component={Home} />
                <Route path="/search" component={Search} />
                {/* url search/:query */}
                <Route 
                  path="/mountain" component={Mountain} 
               //   render={ () => <Mountain title="Mountain" /> }
                />
                <Route path="/lake" component={Lake} />
                <Route path="/boat" component={Boat} />
                <Route component={NotFound} />
            </Switch>
      </div>
    </BrowserRouter> 
    </body>
    );
  }
}

