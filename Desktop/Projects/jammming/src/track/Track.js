import React from 'react';
import styles from './Track.module.css';

const btnStyle = {
 cursor: 'pointer',
 background: 'transparent',
 color: 'white',
 fontSize: '1rem' 
}

function Track({track, onAddTrack, onDeleteTrack, removeTrack}) {
  
  return(
    
      <div className={styles.trackStyling}>
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p> 
        {removeTrack === false ? 
          (<button 
             style={btnStyle}
             onClick={() => {onAddTrack(track)}}
           >+</button>) 

          : (<button 
              style={btnStyle}
              onClick={() => {onDeleteTrack(track)}}
           >-</button>)}
      </div>  
  );
}
export default Track;