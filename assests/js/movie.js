//Const Variable
const API_KEY = '?api_key=7e99decaf8f2959ca1f3df5998115397';
const Movie_baseUrl = 'https://api.themoviedb.org/3/';
const Movie_Img_link = 'https://image.tmdb.org/t/p/w500';


function Movies(moviesList, cardMovie){
  for(var i = 0; i < moviesList.length; i++){
    var Movie_date = moviesList[i].release_date;
    //console.log(Movie_date)
    if(i < 8){
      var Movie_Title = moviesList[i].original_title;
      var Movie_Img = moviesList[i].poster_path;
      var Movie_Poster = Movie_Img_link + Movie_Img;
      var Movie_id = moviesList[i].id;
      //console.log(Movie_Poster)
      movieContainer(Movie_Title, Movie_Poster, Movie_id , cardMovie)
      
    }
  }
}

function MoviePromises (AllMovie, cardMovie){
  fetch(AllMovie)
    .then ( response => {
      return response.json()
    })
    .then ( responseMessage => {
      return responseMessage.results;
    })
    .then( moviesList => {
      Movies(moviesList, cardMovie)
    })
}

function movieContainer(Movie_title, Movie_Poster, Movie_id, cardMovie){
  var mainDiv = document.createElement('div');
  mainDiv.setAttribute('class', 'col-sm-1 img');
  
  var Movieimage = document.createElement('img');
  Movieimage.setAttribute('class', 'rounded movie_poster');
  Movieimage.setAttribute('data-image-id', Movie_id)
  Movieimage.src = Movie_Poster;

  var MovieName = document.createElement('h6');
  MovieName.textContent = Movie_title;
  
  mainDiv.appendChild(Movieimage);
  cardMovie.appendChild(mainDiv);
}

function moviesHome(Movie_baseUrl){
  var cardMovie = document.querySelector('#movie');
  var Moviecondition = 'discover/movie';
  var AllMovie = Movie_baseUrl+ Moviecondition+ API_KEY;
  MoviePromises(AllMovie, cardMovie)
}

function PopularMovies(Movie_baseUrl){
  var cardMovie = document.querySelector('#popular-movie');
  var Moviecondition = 'movie/popular';
  var PopularMovie = Movie_baseUrl+ Moviecondition+ API_KEY;
  MoviePromises(PopularMovie, cardMovie);
}


function ratedMovies(Movie_baseUrl){
  var cardMovie = document.querySelector('#toprated-movie');
  var Moviecondition = 'movie/top_rated';
  var toprateMovie = Movie_baseUrl+ Moviecondition+ API_KEY;
  MoviePromises(toprateMovie, cardMovie);
}


function upcomingMovies(Movie_baseUrl){
  var cardMovie = document.querySelector('#upcoming-movie');
  var Moviecondition = 'movie/upcoming';
  var upcomingMovie = Movie_baseUrl+ Moviecondition+ API_KEY;
  MoviePromises(upcomingMovie, cardMovie)
}

//function latestMovies(Movie_baseUrl){
  //var cardMovie = document.querySelector('#latest-movie');
  //var Moviecondition = 'movie/latest';
  //var latestMovie = Movie_baseUrl+ Moviecondition+ API_KEY;
  //MoviePromises(latestMovie, cardMovie)
//}

//latestMovies(Movie_baseUrl);
upcomingMovies(Movie_baseUrl);
ratedMovies(Movie_baseUrl);
PopularMovies(Movie_baseUrl);
moviesHome(Movie_baseUrl);

//Genre
fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7e99decaf8f2959ca1f3df5998115397')
  .then( response => {
    return response.json()
  })
  .then( responseMessage => {
    //console.log(responseMessage.genres)
    return responseMessage.genres
  })
  .then( genreList => {
    for(var i=0; i < genreList.length; i++){
      var genreName = genreList[i].name;
      var genreId = genreList[i].id;
      var genreID = document.querySelector('#genre-type');

      var genreDIV = document.createElement('div');
      genreDIV.setAttribute('class', 'card genre ml-1');
      genreDIV.setAttribute('data_genre-id', genreId);

      var genre_name = document.createElement('h6');
      genre_name.setAttribute('class', 'genre_title');

      genre_name.innerText = genreName
      genreDIV.appendChild(genre_name);
      genreID.appendChild(genreDIV)
    }
  })


//Scroll the genre

$('#right').click(function() {
  event.preventDefault();
  $('#genre-type').animate({
    scrollLeft: "+=300px"
  }, "slow");
});

  $('#left').click(function() {
  event.preventDefault();
  $('#genre-type').animate({
    scrollLeft: "-=300px"
  }, "slow");
});

function moviesSelect(num){
  if(num == 1){
    var HTML_title = 'Upcoming Movies | Movie List';
    createHTML(HTML_title)
  }
}
function createHTML(title) {
const HTML = 
`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>${title}</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="assests/css/movie.css">

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <a class="navbar-brand" href="#" style="color: white">Movie List</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#" style="color: white">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style="color: white">Movies</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>

  <div class="card mt-2 bg-dark" style="margin-left: 1%;margin-right: 1%;">
    <section >
      <h6 class="mt-3 ml-3"style="color: white;" id="topic">
        Upcoming Movies 
        <hr style="border-color: red;width: 100px;margin-left: 1px;"/>
      </h6>
      <section>
        <div class="row ml-1" id="upcoming-movie">
          
        </div>
      </section>
    </section>
  </div>
</body>

</html>
`

return HTML
}