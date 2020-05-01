import React, {Component} from 'react';
import NotFound from './NotFound';
import Photo from './Photo';
import apiKey from './config.js';

export default class PhotoContainer extends Component {
 
  constructor() {
    super();
    this.state = {
       pics: [],
      // loading: true,
       title: "",
       changeURL: ""
            };
  }
  componentDidMount() {
    console.log(this.props);
    // const { query } = this.props.computedMatch.url
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
            })
          })
       .catch(error => {
          console.log(this.state.pics);
        });
  
  // componentDidUpdate(prevProps) {
  //     if (this.props.changeURL !== prevProps.changeURL) {
  //         console.log(this.props.changeURL)
  //       //  this.fetchData(this.props.userID);
  //       }
  //     }

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
         {/* <h2>{this.props.title} Results</h2> */}
         <h2>{id} Results</h2>
         <ul>
            {pics} 
         </ul>
       </div>
      );
      }
 }

