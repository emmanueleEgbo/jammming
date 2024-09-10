import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../tracklist/Tracklist';

function SearchResults({tracks, onAddTrack}) {

  return(
    <div className={styles.container}>
      <h2 style={{color: 'white', textAlign: 'center', textTransform: 'uppercase'}}>Results</h2>
      <Tracklist tracks={tracks} onAddTrack={onAddTrack} removeTrack={false}/>
    </div>
  );
}

export default SearchResults;