import React, { useEffect, useState } from 'react';
import MatchCard from './MatchCard';

function MatchList() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/matches')
      .then(res => res.json())
      .then(data => {
        setMatches(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching matches:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {matches.map((match, index) => (
        <MatchCard key={index} match={match} />
      ))}
    </div>
  );
}

export default MatchList;
