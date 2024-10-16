import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from '../tracklist/Tracklist';

function Playlist({playListName, playListTracks, onDeleteTrack, renamePlaylist, onSave}) {
  return(
    <div className={styles.playlistContainer}>
      <h2 style={{ fontSize: '1.4rem', textTransform: 'uppercase' }}>Playlist</h2>
      <label htmlFor='nameOfPlaylist'>
        <input 
          value={playListName} 
          id='nameOfPlaylist' 
          onChange={(event) => {renamePlaylist(event)}} 
          className={styles.playlistInput}
       />
      </label>
      <div className={styles.tracks}>
      <Tracklist 
        tracks={playListTracks}
        onDeleteTrack={onDeleteTrack}
      />
      </div>
      <button className={styles.saveBtnStyle} onClick={onSave}>Save to spotify</button>
    </div>
  );
}

export default Playlist;