// var Api = require('../api/apiDetails');
var Api = require('./../api/apiDetails')
var express = require('express');
var fetch = require('node-fetch');

const app = express();



var MovieList = {
  Movie : function(){
    var Url = Api.Movie_baseUrl+"discover/movie/"+Api.API_KEY;
    return fetch(Url)
              .then(response => {
                return response.json()
              })
              .then( responseMessage => {
                return responseMessage.results;
              })
  },

  TV : function(){
    var Url = Api.Movie_baseUrl+"discover/movie/"+Api.API_KEY;
    return fetch(Url)
              .then(response => {
                return response.json()
              })
              .then( responseMessage => {
                return responseMessage.results;
              })
  },

  Trending : function(){
    var Url = Api.Movie_baseUrl+"trending/all/day"+Api.API_KEY;
    return fetch(Url)
              .then(response => {
                return response.json()
              })
              .then( responseMessage => {
                return responseMessage.results;
              })
  },
}

module.exports = MovieList;