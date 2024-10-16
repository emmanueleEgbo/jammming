import React from 'react';
import styles from './Track.module.css';

const btnStyle = {
 cursor: 'pointer',
 background: 'none',
 color: 'white',
 fontSize: '1rem' 
}

function Track({track, onAddTrack, onDeleteTrack, removeTrack}) {
  
  return(
    
      <div className={styles.trackStyling}>
        <h3 className={styles.trackName}>{track.name}</h3>
         {removeTrack === false ? 
          (<button 
             className={styles.addBtn}
             style={btnStyle}
             onClick={() => {onAddTrack(track)}}
           >+</button>) 

          : (<button 
              className={styles.addBtn}
              style={btnStyle}
              onClick={() => {onDeleteTrack(track)}}
        >-</button>)}
        <p className={styles.artist}>Artist: {track.artist} | Album: {track.album}</p> 
        <audio controls className={styles.audio}>
          <source src={track.audio} type="audio/mpeg" />
        </audio>
        <hr></hr>
      </div>  
  );
}
export default Track;