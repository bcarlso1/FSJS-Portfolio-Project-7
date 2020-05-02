import React from 'react';

// loads individual photos within container

const Photo = props => (
        <li>
        <img src={props.url} alt="" />
      </li>
    );

export default Photo;       
