const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Serve static files from frontend build (for deployment)
//app.use(express.static(path.join(__dirname, '../frontend/build')));

// API route to get upcoming matches
app.get('/api/matches', async (req, res) => {
  try {
    const response = await axios.get('https://www.scorebat.com/video-api/v3/');
    const matches = response.data.response.map(match => ({
      title: match.title,
      competition: match.competition,
      date: match.date,
      thumbnail: match.thumbnail,
      matchviewUrl: match.matchviewUrl
    }));
    res.json(matches);
  } catch (error) {
    console.error('Error fetching matches:', error.message);
    res.status(500).json({ error: 'Failed to fetch match data' });
  }
});

// Catch-all route to serve React frontend after build
//app.get('*', (req, res) => {
//  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
//});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
