// /* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

// let dramaShows = [
//   "Ginny & Georgia",
//   "Outlander",
//   "Grey's Anatomy",
//   "Ozark",
//   "The Queen's Gambit"
// ];

// let fantasyShows = [
//   "Supernatural",
//   "The Sandman",
//   "Wednesday",
//   "The Witcher",
//   "Avatar: The Last Airbender"
// ];

// let comedyShows = [
//   "Arrested Development",
//   "Dead to Me",
//   "Seinfeld",
//   "Emily in Paris",
//   "The Good Place"
// ];

// // Provided getRandomNumber function
// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function chooseRandomGenre() {
//   let genres = ['drama', 'fantasy', 'comedy'];
//   let randomIndex = getRandomNumber(0, genres.length - 1);
//   return genres[randomIndex];
// }

// // Test the function
// console.log(chooseRandomGenre());

// function displayRandomShow(genre) {
//     // Deliverable 2: Your code here 👇
//   // 2. displayRandomShow(genre)
//   if (genre === 'random') {
//     genre = chooseRandomGenre();
//     console.log(`Random genre selected: ${genre}`);
//   }

//   let shows;
//   if (genre === 'drama') {
//     shows = dramaShows;
//   } else if (genre === 'fantasy') {
//     shows = fantasyShows;
//   } else if (genre === 'comedy') {
//     shows = comedyShows;
//   }

//   if (shows) {
//     let randomIndex = getRandomNumber(0, shows.length - 1);
//     displayShow(shows[randomIndex]);
//   }
  
// }

// // Test the function
// displayRandomShow('random');
// displayRandomShow('drama');
// displayRandomShow('fantasy');
// displayRandomShow('comedy');

function chooseRandomGenre() {
  const genres = ["drama", "fantasy", "comedy"];
  const randomIndex = getRandomNumber(0, genres.length - 1);
  return genres[randomIndex];
}

// Arrays of shows by genre
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

// Function to choose a random genre
function chooseRandomGenre() {
  const genres = ["drama", "fantasy", "comedy"];
  const randomIndex = getRandomNumber(0, genres.length - 1);
  return genres[randomIndex];
}

// Function to display a random show based on the genre
function displayRandomShow(genre) {
  let show;
  
  if (genre === "random") {
    genre = chooseRandomGenre();
  }
  
  if (genre === "drama") {
    show = dramaShows[getRandomNumber(0, dramaShows.length - 1)];
  } else if (genre === "fantasy") {
    show = fantasyShows[getRandomNumber(0, fantasyShows.length - 1)];
  } else if (genre === "comedy") {
    show = comedyShows[getRandomNumber(0, comedyShows.length - 1)];
  }

  displayShow(show);
}

function displayRandomShow(genre) {
  if (genre === "random") {
    genre = chooseRandomGenre();
  }
  
  let showList;

  switch (genre) {
    case "drama":
      showList = dramaShows;
      break;
    case "fantasy":
      showList = fantasyShows;
      break;
    case "comedy":
      showList = comedyShows;
      break;
    default:
      console.error("Invalid genre selected");
      return;
  }

  const randomIndex = getRandomNumber(0, showList.length - 1);
  const randomShow = showList[randomIndex];
  displayShow(randomShow);
}
