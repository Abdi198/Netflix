// Shows arrays
const dramas = ["The Crown", "Breaking Bad", "Stranger Things", "The Queen's Gambit", "Ozark"];
const fantasies = ["The Witcher", "Game of Thrones", "The Mandalorian", "Shadow and Bone", "The Umbrella Academy"];
const comedies = ["The Office", "Brooklyn Nine-Nine", "Parks and Recreation", "Arrested Development", "BoJack Horseman"];

// Helper functions
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayShow(show) {
  // Assume there's a function that handles the display of the show
  document.getElementById('show-row').innerHTML = `<div class="col-md-4"><div class="card bg-dark text-white"><img src="https://via.placeholder.com/150" class="card-img" alt="${show}"><div class="card-img-overlay"><h5 class="card-title">${show}</h5></div></div></div>`;
}

// Function to choose a random genre
function chooseRandomGenre() {
  const genres = ["drama", "fantasy", "comedy"];
  const randomIndex = getRandomNumber(0, genres.length - 1);
  return genres[randomIndex];
}

// Function to display a random show based on the genre
function displayRandomShow(genre) {
  if (genre === "random") {
    genre = chooseRandomGenre();
  }

  let show;
  switch (genre) {
    case "drama":
      show = dramas[getRandomNumber(0, dramas.length - 1)];
      break;
    case "fantasy":
      show = fantasies[getRandomNumber(0, fantasies.length - 1)];
      break;
    case "comedy":
      show = comedies[getRandomNumber(0, comedies.length - 1)];
      break;
  }
  displayShow(show);
}
