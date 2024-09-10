import React, { useState }from 'react';
import styles from './App.module.css';
import SearchBar from '../searchbar/SearchBar';
import SearchResults from '../searchresults/SearchResults';
import Playlist from '../playlist/Playlist';
import Tracklist from '../tracklist/Tracklist';
import Track from '../track/Track';

function App(){
    const returedTracks = [
    {name: 'I want to know', artist: 'Joe Thomas', album: 'Back to the times 1997', id: '111', uri: 'spotify:track:6rqhFgbbKwnb9MLmUQDhG6'},
    {name: 'Paradise', artist: 'Cold Play', album: 'Life, 2012', id: '112', uri: 'spotify:track:7FjZU7XFs7P9jHI9Z0yRhK'},
    {name: 'If', artist: 'Davido', album: 'Baddest, 2017', id: '113', uri: 'spotify:track:7FjZU7XFs5P9jHI9Z9yRhW'},
    {name: 'Ojuelegba', artist: 'Wizkid', album: 'Made in Lagos, 2015', id: '114',   uri: 'spotify:track:7BjGU7XFs7P9jHI9Z0yJyP'},
    {name: 'Air plane mode', artist: 'Fireboy', album: 'The year of the boys', id: '115', uri: 'spotify:track:7FjZU7AAs7P9jHI9Z0yHgM'}
  ];
  const [tracks, setTracks] = useState(returedTracks);
  const [playListName, setPlayListName] = useState('Happy mood playlist');
  const [playListTracks, setPlayListTracks] = useState([
    {name: 'I want to know', artist: 'Joe Thomas', album: 'Back to the times 1997', id: '111', uri: 'spotify:track:6rqhFgbbKwnb9MLmUQDhG6'},
    {name: 'Ojuelegba', artist: 'Wizkid', album: 'Made in Lagos, 2015', id: '114', uri: 'spotify:track:7BjGU7XFs7P9jHI9Z0yJyP'},
    {name: 'White Christmas', artist: 'Michael Bolton', album: 'Christmas, 1995', id: '225', uri: 'spotify:track:7BiGU7XFs7P9jHI7Z0yKaZ'}
  ]);

  
  const playlistToSave = [];
  
  const saveList = () => {}


  
  const tracksUpdate = (prev) => {setTracks((newTracks) => {
    return [newTracks, ...prev];
  })}

 //Function to add songs from search results to playlist:
 const onAddTrack = (selectedTrack) => {
    if(playListTracks.find(currTrack => currTrack.id === selectedTrack.id)){
      console.log(playListTracks)
      return playListTracks;
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
        <SearchBar />
        <SearchResults 
          tracks={tracks}
          onAddTrack={onAddTrack}
        />
        <Playlist 
          playListName={playListName} 
          playListTracks={playListTracks} 
          onDeleteTrack={onDeleteTrack}
          renamePlaylist={renamePlaylist}
        />
      </div>
    </div>
  );
}

export default App;