import React from 'react';

const TrackSearchResult = ({ track, key }) => {
  return (
    <div className="track-results">
      <img src={track.albumUrl} className="album-image" />
      <div>
        <div className="track-title">{track.title}</div>
        <div className="track-artist">{track.artist}</div>
      </div>
    </div>
  );
};

export default TrackSearchResult;
