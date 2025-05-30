import React from 'react';
import MatchList from './components/MatchList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Upcoming Soccer Matches
      </h1>
      <MatchList />
    </div>
  );
}

export default App;
