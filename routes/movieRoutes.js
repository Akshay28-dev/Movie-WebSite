var express = require('express');
var fetch = require('node-fetch');
var Url = require('url');

var router = express.Router();


var genreList = [];

router.get('/', function(req, res){

  var queryValue = req.query.page;
  
  if(queryValue == undefined){
    var pageNo = 1
  }
  else if(queryValue == "NaN"){
    var pageNo = 1
  }
  else{
    var pageNo = queryValue
  }
  let promises = [
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7e99decaf8f2959ca1f3df5998115397&language=en-US'),
    fetch(`http://api.themoviedb.org/3/discover/movie?api_key=7e99decaf8f2959ca1f3df5998115397&page=${pageNo}`)
  ];
  // console.log(pageNo);
  Promise.all(promises)
      .then( data => {
          return Promise.all( data.map (d => d.json()))
      })
      .then(([genre, movies]) => {
          // console.log(tv)
          // console.log(movies.results[0].poster_path)
          var NextPage = parseInt(pageNo, 10) + 1;
          var PrevPage = parseInt(pageNo, 10) - 1;
          
          if(PrevPage <= 0){
            PrevPage = 1;
          }

          res.render('home', {
            movie: movies.results,
            genre: genre.genres,
            currentName: "Home",
            Nextpage: '/?page='+NextPage,
            Prevpage: '/?page='+PrevPage
          })
      })
})

router.post('/', function(req, res){
  var queryValue = req.query.page;
  console.log(queryValue)
  if(queryValue == undefined){
    var pageNo = 1
  }
  else if(queryValue === "NaN"){
    var pageNo = 1
  }
  else{
    var pageNo = queryValue
  }

  let promises = [
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7e99decaf8f2959ca1f3df5998115397&language=en-US'),
    fetch(`http://api.themoviedb.org/3/discover/movie?api_key=7e99decaf8f2959ca1f3df5998115397&page=${pageNo}`)
  ];
  
  Promise.all(promises)
      .then( data => {
          return Promise.all( data.map (d => d.json()))
      })
      .then(([genre, movies]) => {
          // console.log(tv)
          // console.log(movies.results[0].poster_path)
          var NextPage = parseInt(pageNo, 10) + 1;
          var PrevPage = parseInt(pageNo, 10) - 1;
          if(PrevPage <= 0){
            PrevPage = 1;
          }
          res.render('home', {
            movie: movies.results,
            genre: genre.genres,
            currentName: "Home",
            Nextpage: '/?page='+NextPage,
            Prevpage: '/?page='+PrevPage

          })
      })
})


router.get('/:genrename', function(req, res){
  var genreName = req.params.genrename;

  var queryValue = req.query.page;
  console.log(queryValue)
  if(queryValue == undefined){
    var pageNo = 1
  }
  else if(queryValue === "NaN"){
    var pageNo = 1
  }
  else{
    var pageNo = queryValue
  }
  
  let promises = [
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7e99decaf8f2959ca1f3df5998115397&language=en-US'),
    fetch(`https://api.themoviedb.org/3/movie/${genreName}?api_key=7e99decaf8f2959ca1f3df5998115397&language=en-US&page=${pageNo}`)
  ];

  // console.log(promises)
  Promise.all(promises)
      .then( data => {
          return Promise.all( data.map (d => d.json()))
      })
      .then(([genre, movies]) => {
          // console.log(tv)
          // console.log(movies.results[0].poster_path)
          var NextPage = parseInt(pageNo, 10) + 1;
          var PrevPage = parseInt(pageNo, 10) - 1;
          if(PrevPage <= 0){
            PrevPage = 1;
          }
          res.render('home', {
            movie: movies.results,
            genre: genre.genres,
            currentName: genreName,
            Nextpage: '/'+genreName+'/?page='+NextPage,
            Prevpage:  '/'+genreName+'/?page='+PrevPage
          })
      })
})


router.post('/:genrename', function(req, res){
  var genreName = req.params.genrename;

  var queryValue = req.query.page;
  console.log(queryValue)
  if(queryValue == undefined){
    var pageNo = 1
  }
  else if(queryValue === "NaN"){
    var pageNo = 1
  }
  else{
    var pageNo = queryValue
  }
  
  let promises = [
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7e99decaf8f2959ca1f3df5998115397&language=en-US'),
    fetch(`https://api.themoviedb.org/3/movie/${genreName}?api_key=7e99decaf8f2959ca1f3df5998115397&language=en-US&page=${pageNo}`)
  ];

  // console.log(promises)
  Promise.all(promises)
      .then( data => {
          return Promise.all( data.map (d => d.json()))
      })
      .then(([genre, movies]) => {
          // console.log(tv)
          // console.log(movies.results[0].poster_path)
          var NextPage = parseInt(pageNo, 10) + 1;
          var PrevPage = parseInt(pageNo, 10) - 1;
          if(PrevPage <= 0){
            PrevPage = 1;
          }
          res.render('home', {
            movie: movies.results,
            genre: genre.genres,
            currentName: genreName,
            Nextpage: '/'+genreName+'/?page='+NextPage,
            Prevpage:  '/'+genreName+'/?page='+PrevPage
          })
      })
})



router.get('/genre/:genrename', function(req, res){
  var genreName = req.params.genrename;
  var genreId = req.query.id;

  var queryValue = req.query.page;
  console.log(queryValue)
  if(queryValue == undefined){
    var pageNo = 1
  }
  else if(queryValue === "NaN"){
    var pageNo = 1
  }
  else{
    var pageNo = queryValue
  }

  

  let promises = [
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7e99decaf8f2959ca1f3df5998115397&language=en-US'),
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7e99decaf8f2959ca1f3df5998115397&with_genres=${genreId}&page=${pageNo}`)
  ];

  // console.log(promises)
  Promise.all(promises)
      .then( data => {
          return Promise.all( data.map (d => d.json()))
      })
      .then(([genre, movies]) => {
          // console.log(tv)
          // console.log(movies.results[0].poster_path)

          var NextPage = parseInt(pageNo, 10) + 1;
          var PrevPage = parseInt(pageNo, 10) - 1;
          if(PrevPage <= 0){
            PrevPage = 1;
          }

          res.render('home', {
            movie: movies.results,
            genre: genre.genres,
            currentName: genreName,
            Nextpage: '/genre/'+genreName+'/?id='+genreId+'&page='+NextPage,
            Prevpage: '/genre/'+genreName+'/?id='+genreId+'&page='+PrevPage
          })
      })
})

router.post('/genre/:genrename', function(req, res){
  var genreName = req.params.genrename;
  var genreId = req.query.id;

  var queryValue = req.query.page;
  console.log(queryValue)
  if(queryValue == undefined){
    var pageNo = 1
  }
  else if(queryValue === "NaN"){
    var pageNo = 1
  }
  else{
    var pageNo = queryValue
  }

  let promises = [
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7e99decaf8f2959ca1f3df5998115397&language=en-US'),
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7e99decaf8f2959ca1f3df5998115397&with_genres=${genreId}&page=${pageNo}`)
  ];

  // console.log(promises)
  Promise.all(promises)
      .then( data => {
          return Promise.all( data.map (d => d.json()))
      })
      .then(([genre, movies]) => {
          // console.log(tv)
          // console.log(movies.results[0].poster_path)

          var NextPage = parseInt(pageNo, 10) + 1;
          var PrevPage = parseInt(pageNo, 10) - 1;
          if(PrevPage <= 0){
            PrevPage = 1;
          }

          res.render('home', {
            movie: movies.results,
            genre: genre.genres,
            currentName: genreName,
            Nextpage: '/genre/'+genreName+'/?id='+genreId+'&page='+NextPage,
            Prevpage: '/genre/'+genreName+'/?id='+genreId+'&page='+PrevPage
          })
      })
})

router.get('/movies/:movieID', function(req, res){
  var MovieId = req.params.movieID;
  console.log(MovieId)
  let promises = [
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7e99decaf8f2959ca1f3df5998115397&language=en-US'),
    fetch(`https://api.themoviedb.org/3/movie/${MovieId}?api_key=7e99decaf8f2959ca1f3df5998115397&language=en-US`),
    fetch(`https://api.themoviedb.org/3/movie/${MovieId}/credits?api_key=7e99decaf8f2959ca1f3df5998115397`)
  ];

  // console.log(promises)
  Promise.all(promises)
      .then( data => {
          return Promise.all( data.map (d => d.json()))
      })
      .then(([genre, movie, credit]) => {
          // console.log(tv)
          // console.log(movies.results[0].poster_path)
          console.log(credit.cast)
          res.render('movies', {
            movie: movie,
            genre: genre.genres,
            credit: credit.cast
            // currentName: genreName
          })
      })
})
module.exports = router