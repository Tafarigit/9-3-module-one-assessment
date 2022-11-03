/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) { 

  let result = [];
  for (let movie of movies) {
    if (movies.length === 0){
      return result
    }else {
    result.push([movie.title].join(''))
  }
}
return result

//   let result = []
//   for (let movie of movies) {
//     movie.title = movies.title
//   }if (movie.includes(movie.title)) {
//     result.push(movie)
//   }
//   return result
 }

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {

let result = []
let largeNum = movies[0].metascore 
let num = 0
for (let i = 0; i < movies.length; i++) {
  if (movies.length === 0) {
    return num
  }
  else if (movies[i].metascore > largeNum) {
    num = largeNum
    largeNum = movies[i].metascore
  
}
}
return Number(largeNum)


}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  // Attemtpting to get all indbRatings in one array,
  //and then to sum up all the values in the array,
  // and then divide the sumtotal by the length of the array to get the average score.
let result = [];
let average = 0
total = 0



// let sum = 0
// for (let i = 0; i< array.length; i++) {

//   sum+= array[i]
// //   array[i] = sum 
// }
// return array
return average
}



/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */

function countByRating(movies) {

let count  = 0;
  let result = {};
  
  for (let movie of movies) {
    
     
    if (!result[movie.rated]) {
    result[movie.rated] = 1
  
     
    }else {
      result[movie.rated]++
    }
    for (let movie in result) {
      if (result[movie.rated] > 1) {
        count++
      }
    }
  
    }
  return result
}

//   let count =0
//   let result = {}
// for (let i = 0 ; i < movies.length; i++) {
//   movie = movies[i].rated
//   if (!movie[i].rated) {
//     result[movie[i].rated] = 1
//   }else {
//     result[movie[i].rated]++
//   }
// }
// return result

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  let result = {} 
  let message = null
  for (let i = 0; i < movies.length; i++) {
    movie = movies[i]
  }if (movie.imdbId === id) {
    return result[movie] = id
  }


return message
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
let result = []

if (movies.genre !== genre) {
  return result
}
if (movies[i].genre = genre) {
  result.push(movies.genre)
}

function checkGenre(genre) {
  return genre
}
result = movies.filter(checkGenre)
if (movies.genre !== genre) {
  return result
}
// }
// for (let i = 0; i < movies.length; i++) {
//   movie = movies[i].genre
//   if (movies.length === 0) {
//     return result
//   }else{
 
//   result.push(movies[i].genre)
// } if (movies[i].genre === genre) {
//   return resul
// }





return result
}
// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) { 
  let result = []
  for (let movie of movies) {
    if (movies.length === 0) {
      return result
   
    }if (movie.release <= year) {
      result.push(movie.release)
      return result
    }


  }



  return result
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  let message = null
  let name = ""
  let highestMovie = 0
  result = {}
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].boxOffice > highestMovie) {
      
      highestMovie = movies[i].boxOffice
      
      
    
      
    
      
    }if (movies.length > 0) {
      return movies[i].title
     
    } 
  }

return message;
  
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
