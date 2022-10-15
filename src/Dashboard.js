import { useState } from 'react';
import useAuth from './useAuth';

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState('');

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
    </main>
  );
};

export default Dashboard;
