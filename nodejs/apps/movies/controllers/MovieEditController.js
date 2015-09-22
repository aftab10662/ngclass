(function(module) {
    'use strict';

    function MovieEditController(movieData, $location) {
        var edit = this;

        edit.movie = {};
        edit.saveMovie = saveMovie;

        function movieSaved(movie) {
            $location.path("/detail/" + movie.id);
        }

        function saveMovie(isValid) {
            if(isValid) {
                movieData.saveMovie(edit.movie)
                         .then(movieSaved)
            }
        }
    }

    module.controller("MovieEditController", MovieEditController);

}(angular.module("movies-app")));
