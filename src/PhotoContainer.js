import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';


const PhotoContainer = props => {

    const results = props.data;
    let pics = results.map(pic =>
      <Photo url={pic.images.fixed_height_small.url} key={pic.id} />
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