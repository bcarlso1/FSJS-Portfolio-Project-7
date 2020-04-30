import React, {Component} from 'react';
import NotFound from './NotFound';
import Photo from './Photo';

export default class PhotoContainer extends Component {
  
  componentDidMount() {
    console.log(this.props.match)
      }
    
  
  // componentDidUpdate(prevProps) {
  //     if (this.props.changeURL !== prevProps.changeURL) {
  //         console.log(this.props.changeURL)
  //       //  this.fetchData(this.props.userID);
  //       }
  //     }

      render() {
    
     const results = this.props.data;
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
         {/* <h2>{this.props.match.params.id} Results</h2> */}
         <ul>
            {pics} 
         </ul>
       </div>
      );
      }
 }

