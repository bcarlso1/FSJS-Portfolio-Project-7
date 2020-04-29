import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';

export default class PhotoContainer extends Component {
      
    // componentDidUpdate(prevProps) {
    //     // Typical usage (don't forget to compare props):
    //     if (this.props.userID !== prevProps.userID) {
    //       this.fetchData(this.props.userID);
    //     }
    //   }

     const results = props.data;
    
     let pics;
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
         <h2>{props.title} Results</h2>
         <ul>
            {pics} 
         </ul>
       </div>
      );
 }

export default PhotoContainer