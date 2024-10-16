import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from '../tracklist/Tracklist';

function SearchResults({searchResults, onAddTrack}) {

  return(
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 style={{color: 'white', textAlign: 'center', textTransform: 'uppercase', marginTop:'0'}}>Results</h2>
        <Tracklist tracks={searchResults} onAddTrack={onAddTrack} removeTrack={false}/>
      </div>
    </div>
  );
}

export default SearchResults;