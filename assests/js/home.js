//Const Variable
const API_KEY = '7e99decaf8f2959ca1f3df5998115397';
const Movie_baseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key='+API_KEY;
const Movie_Img_link = 'https://image.tmdb.org/t/p/w500';

var cardMovie = document.querySelector('#movie');

function movieContainer(Movie_title, Movie_Poster, Movie_id){
  var mainDiv = document.createElement('div');
  mainDiv.setAttribute('class', 'col-sm-1 ml-2 img');
  
  var Movieimage = document.createElement('img');
  Movieimage.setAttribute('class', 'rounded movie_poster');
  Movieimage.setAttribute('data-image-id', Movie_id)
  Movieimage.src = Movie_Poster;

  var MovieName = document.createElement('h6');
  MovieName.textContent = Movie_title;
  
  mainDiv.appendChild(Movieimage);
  mainDiv.appendChild(MovieName);
  cardMovie.appendChild(mainDiv);
}

function moviesHome(Movie_baseUrl){
  fetch(Movie_baseUrl)
    .then ( response => {
      return response.json()
    })
    .then ( responseMessage => {
      console.log(responseMessage.results)
      return responseMessage.results;
    })
    .then( moviesList => {
      for(var i = 0; i < moviesList.length; i++){
        var Movie_date = moviesList[i].release_date;
        console.log(Movie_date)
        if(Movie_date > '2019' && i < 8){
          var Movie_Title = moviesList[i].original_title;
          var Movie_Img = moviesList[i].poster_path;
          var Movie_Poster = Movie_Img_link + Movie_Img;
          var Movie_id = moviesList[i].id;
          console.log(Movie_Poster)
          movieContainer(Movie_Title, Movie_Poster, Movie_id)
        }
      }
    })
}

moviesHome(Movie_baseUrl);