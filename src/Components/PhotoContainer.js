import React, {Component} from 'react';
import NotFound from './NotFound';
import Photo from './Photo';
import apiKey from './config.js';

export default class PhotoContainer extends Component {
 

  // set up state for loading (default), and empty for pics to display
  constructor() {
    super();
    this.state = {
       pics: [],
       loading: true
            };
    }

  componentDidMount() {
    this.performSearch();
}

// if there is a new "id", run the search again
componentDidUpdate(prevProps) {
  if (this.props.id !== prevProps.id) {
      console.log(this.props.id)
      this.performSearch();
    }
  }

  // run the search with the "id" as the query variable
  performSearch = (query=this.props.id) => 
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
     // convert to json
    .then(response => response.json())
     .then(responseData => {   
        // update state to save array of pics in pics state and update loading to false    
        this.setState({ 
                pics: responseData.photos.photo,
                loading: false
            })
          })
       .catch(error => {
          console.log(this.state.pics);
        });

      render() {
      // save pics array as const results
     const results = this.state.pics;
     let pics;

      if (results.length > 0) {
        // map the array onto the photo framework
        pics = results.map(pic => 
        <Photo 
            url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} 
            key={pic.id}
        />
        );
      } else {
        // if no results load no results page
        pics = <NotFound />;
      }
  
      // loads title from id
      // says loading if true, show pics if false
      return (
         <div class="photo-container">
         <h2>{this.props.id} Results</h2>
         <div>
            {
              (this.state.loading)
                ? <p>Loading...</p>
                : 
                <ul>
                {pics} 
                </ul>
            }
         </div>
       </div>
      );
      }
 }

