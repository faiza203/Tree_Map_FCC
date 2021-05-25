const pledgesURL =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json";
const movieURL =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json";
const gameURL =
  "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json";

let data;
let width = 960;
let height = 570;

const getPledgesData = () => {
  const req = new XMLHttpRequest();
  req.open("get", pledgesURL, true);
  req.onload = () => {
    data = JSON.parse(req.responseText);
  };
  req.send();
};

const getMovieData = () => {
  const req = new XMLHttpRequest();
  req.open("get", movieURL, true);
  req.onload = () => {
    data = JSON.parse(req.responseText);
  };
  req.send();
};

const getGameData = () => {
  const req = new XMLHttpRequest();
  req.open("get", gameURL, true);
  req.onload = () => {
    data = JSON.parse(req.responseText);
  };
  req.send();
};

const getData = (type) => {
  if (type === "videoGame") {
    getGameData();
  } else if (type === "kickstarter") {
    getPledgesData();
  } else if (type === "movie") {
    getMovieData();
  }
  setTimeout(() => console.log(data), 100);
};

d3.select("body")
  .select(".videoGame")
  .on("click", () => getData("videoGame"));

d3.select("body")
  .select(".movie")
  .on("click", () => getData("movie"));

d3.select("body")
  .select(".kickstarter")
  .on("click", () => getData("kickstarter"));
