import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';


const PhotoContainer = props => {

    const results = props.data;
    let pics = results.map(pic =>
      <Photo url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} key={pic.id} />
      );
    
    return (
        <div class="photo-container">
        <h2>Results</h2>
        <ul>
          {pics}
        </ul>
        <NotFound />
      </div>
    );
   
}


export default PhotoContainer;