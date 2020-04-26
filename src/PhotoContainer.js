import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';


const PhotoContainer = props => {

    const results = props.data;
    const title = props.title;
    
    let pics;
    if (results.length > 0) {
      pics = results.map(pic => 
      <Photo 
          url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} 
          key={pic.id}
         // changeURL={this.performSearch}
      />
      );
    } else {
      pics = <NotFound />;
    }
  
    
    return (
        <div class="photo-container">
        <h2>{title} Results</h2>
        <ul>
          {pics}
        </ul>
      </div>
    );
   
}


export default PhotoContainer;