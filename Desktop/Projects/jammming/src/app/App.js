import React, { useState, useEffect, useCallback }from 'react';
import styles from './App.module.css';
import SearchBar from '../searchbar/SearchBar';
import SearchResults from '../searchresults/SearchResults';
import Playlist from '../playlist/Playlist';
import Tracklist from '../tracklist/Tracklist';
import Track from '../track/Track';
import { authenticateWithSpotify, search, saveUserPlaylist } from '../spotify/Spotify';

function App(){
  const returedTracks = [];
  const [tracks, setTracks] = useState(returedTracks);
  const [searchResults, setSearchResults] = useState([]);
  const [playListName, setPlayListName] = useState('Choose playlist name');
  const [playListTracks, setPlayListTracks] = useState([]);

const fetchResults = (term) => {
  search(term) // Assume fetchResults is a function that performs the actual search
    .then(setSearchResults) // Set the results once the promise resolves
    .catch(error => console.error(error)); // Handle any errors
}

const savePlaylist = useCallback(() => {
  const trackUris = playListTracks.map((track) => track.uri);
  saveUserPlaylist(playListName, trackUris);
      setPlayListName('New Playlist');
      setPlayListTracks([]);
}, [playListName, setPlayListTracks]);


 //Function to add songs from search results to playlist:
 const onAddTrack = (selectedTrack) => {
    if(playListTracks.find(currTrack => currTrack.id === selectedTrack.id)){
      return;
    }
    console.log('I am working');
    setPlayListTracks([...playListTracks, selectedTrack]) ;
}
  //Function to delete songs from search results to playlist:
  const onDeleteTrack = (selectedTrack) => {
    setPlayListTracks(playListTracks.filter(currTrack => currTrack.id !== selectedTrack.id))
  }
  

  const renamePlaylist = (event) => {setPlayListName(event.target.value)}

  return(
    <div className={styles.appBG }>
      <div className={styles.layer}>
      <h1 className={styles.pageTitle}>Ja<span className={styles.highlight}>mmm</span>ing</h1>
      <button onClick={() => authenticateWithSpotify()} className={styles.authorizeBtn} >Authorize Spotify</button>
        <SearchBar onSearch={fetchResults}/>
        <SearchResults 
          searchResults={searchResults}
          onAddTrack={onAddTrack}
        />
        <Playlist 
          playListName={playListName} 
          playListTracks={playListTracks} 
          onDeleteTrack={onDeleteTrack}
          renamePlaylist={renamePlaylist}
          onSave={savePlaylist}
        />
      </div>
    </div>
  );
}

export default App;