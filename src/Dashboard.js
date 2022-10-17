import { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import useAuth from './useAuth';
import axios from 'axios';

const spotifyApi = new SpotifyWebApi({
  clientId: '3d8c865e52ed4544b848fe4de836158d',
});

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);

  useEffect(() => {
    // Use access token for queries
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;
    console.log(`access token: ${accessToken}`);

    // Perform search query
    let cancel = false;
    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });
    return () => (cancel = true);
  }, [search, accessToken]);

  return (
    <main>
      <div className="search">
        <label>
          <input
            type="search"
            placeholder="Search songs/artists"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>
      <section className="results">
        <h1>Results</h1>
      </section>
      <div>Bottom</div>
    </main>
  );
};

export default Dashboard;
