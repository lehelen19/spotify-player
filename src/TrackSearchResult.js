import React from 'react';

const TrackSearchResult = ({ track, chooseTrack }) => {
  const handlePlay = () => {
    chooseTrack(track);
  };

  return (
    <div className="track-results" onClick={handlePlay}>
      <img src={track.albumUrl} className="album-image" />
      <div>
        <div className="track-title">{track.title}</div>
        <div className="track-artist">{track.artist}</div>
      </div>
    </div>
  );
};

export default TrackSearchResult;
