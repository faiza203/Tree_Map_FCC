// URLs
const pledgesURL =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json";
const movieURL =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json";
const gameURL =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json";

// Requirments
let pledgesData, movieData, gameData;

// GetPledgesData
const getPledgesData = () => {
  const req = new XMLHttpRequest();
  req.open("get", pledgesURL, true);
  req.onload = () => {
    pledgesData = JSON.parse(req.responseText);
  };
  req.send();
};

// GetMovieData
const getMovieData = () => {
  const req = new XMLHttpRequest();
  req.open("get", movieURL, true);
  req.onload = () => {
    movieData = JSON.parse(req.responseText);
  };
  req.send();
};

// GetGameData
const getGameData = () => {
  const req = new XMLHttpRequest();
  req.open("get", gameURL, true);
  req.onload = () => {
    gameData = JSON.parse(req.responseText);
  };
  req.send();
};
