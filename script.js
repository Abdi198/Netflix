
let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit"
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender"
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place"
];


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chooseRandomGenre() {
  let genres = ['drama', 'fantasy', 'comedy'];
  let randomIndex = getRandomNumber(0, genres.length - 1);
  return genres[randomIndex];
}


console.log(chooseRandomGenre());

function displayRandomShow(genre) {

  if (genre === 'random') {
    genre = chooseRandomGenre();
    console.log(`Random genre selected: ${genre}`);
  }

  let shows;
  if (genre === 'drama') {
    shows = dramaShows;
  } else if (genre === 'fantasy') {
    shows = fantasyShows;
  } else if (genre === 'comedy') {
    shows = comedyShows;
  }

  if (shows) {
    let randomIndex = getRandomNumber(0, shows.length - 1);
    displayShow(shows[randomIndex]);
  }
  
}


