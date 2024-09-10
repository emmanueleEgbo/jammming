import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../tracklist/Tracklist';

function Playlist({playListName, playListTracks, onDeleteTrack, renamePlaylist}) {
  return(
    <div className={styles.playlistContainer}>
      <h2 className={styles.playlist }>Playlist</h2>
      <label htmlFor='nameOfPlaylist'>
        <input 
          value={playListName} 
          id='nameOfPlaylist' 
          onChange={(event) => {renamePlaylist(event)}} 
          className={styles.playlistTitle}
       />
      </label>
      <Tracklist 
        tracks={playListTracks}
        onDeleteTrack={onDeleteTrack}
      />
      <button className={styles.saveBtnStyle}>Save to spotify</button>
    </div>
  );
}

export default Playlist;