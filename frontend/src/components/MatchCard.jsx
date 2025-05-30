import React from 'react';

function MatchCard({ match }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img src={match.thumbnail} alt="Match Thumbnail" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{match.title}</h2>
        <p className="text-sm text-gray-600">Competition: {match.competition}</p>
        <p className="text-sm text-gray-500 mt-2">Scheduled: {new Date(match.date).toLocaleString()}</p>
        <a
          href={match.matchviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          Watch Highlights
        </a>
      </div>
    </div>
  );
}

export default MatchCard;
