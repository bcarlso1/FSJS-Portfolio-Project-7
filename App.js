import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import apiKey from './config.js';
import Search from './Search';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';

export default class App extends Component {

    
    //     constructor() {
    //       super();
    //     //  let name= match.params.name;
    //       this.state = {
    //         pics: [],
    //         loading: true,
    //         title: "",
    //         // changeURL: props.changeURL
    //        // query: match.params.mofo
    //       };
    //     }
      
    //     componentDidMount() {
    //         this.performSearch();
    //     }
        
       
    //   // props in perform search??? instead of query
    //     performSearch = (props) =>
    //       fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${props.query}&per_page=24&format=json&nojsoncallback=1`)
    //         .then(console.log(props))
    //         .then(response => response.json())
    //         .then(responseData => {
              
    //           this.setState({ 
    //               pics: responseData.photos.photo,
    //               loading: false,
    //               title: ""
    //           })
    //         })  
    //         .catch(error => {
    //           console.log(this.state.pics);
    //         });  
         
              
      render() {
          
        return (
      
     <BrowserRouter>
        <div class="container">
            <Search />
            <Switch>
                <Route exact path="/" component={PhotoContainer} />  
                <Route path="/mountain" component={PhotoContainer} />
                <Route path="/lake" component={PhotoContainer} />
                <Route path="/boat" component={PhotoContainer} />
            </Switch>
        </div>
    </BrowserRouter> 


    //             <Search onSearch={this.performSearch} />
    //             <Nav title="Nav" onSelect={this.performSearch} /> 
    //             <div>
    //                 {
    //                   (this.state.loading)
    //                    ? <p>Loading...</p>
    //                    :
    //               <Switch>
    //               <Route exact path="/" render={ () => <PhotoContainer title="Cats" data={this.state.pics} query="birds" /> } />
    //                <Route path="/mountain" render={ () => <PhotoContainer title="Mountain" data={this.state.pics} /> } />
    //                {/* <Route exact path="/" render={ () => <PhotoContainer title="Cats" data={this.state.pics} onLoad={this.performSearch} /> } />
    //                <Route path="/mountain" render={ () => <PhotoContainer title="Mountain" data={this.state.pics} /> } /> */}
    //                  {/* <Route path="/search/:query" */}
    //                 <Route component={NotFound} />
    //               </Switch> 
    //                 }
    //         </div>
    //         </div>
    
      
    //       );
    //     }
    //   }
      
}