import React, {Component} from 'react';
import NotFound from './NotFound';
import Photo from './Photo';
import apiKey from './config.js';

export default class PhotoContainer extends Component {
 
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

componentDidUpdate(prevProps) {
  if (this.props.id !== prevProps.id) {
      console.log(this.props.id)
      this.performSearch();
    }
  }

  performSearch = (query=this.props.id) => 
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
     
    .then(response => response.json())
     .then(responseData => {   
            
        this.setState({ 
                pics: responseData.photos.photo,
                loading: false
            })
          })
       .catch(error => {
          console.log(this.state.pics);
        });

      render() {
    
     const results = this.state.pics;
     let pics;
      // console.log(this.props.match)

      if (results.length > 0) {
        pics = results.map(pic => 
        <Photo 
            url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} 
            key={pic.id}
        />
        );
      } else {
        pics = <NotFound />;
      }
  
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

