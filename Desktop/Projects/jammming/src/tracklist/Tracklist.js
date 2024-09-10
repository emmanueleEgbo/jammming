import React from 'react';
import Track from '../track/Track';

function Tracklist({ tracks, onAddTrack, onDeleteTrack, removeTrack }) {
  return (
    <div>
      {tracks.map((track) => (
        <Track 
          track={track} 
          key={track.id}
          onAddTrack={onAddTrack}
          onDeleteTrack={onDeleteTrack}
          removeTrack={removeTrack}
        />
      ))}
    </div>
  );
}

export default Tracklist;
