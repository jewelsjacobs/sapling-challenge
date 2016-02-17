import Bacon from 'baconjs'
import R from 'ramda'
import * as Dispatcher from './dispatcher'
const d = new Dispatcher();

export default {
  toMoviesProperty: function(initialMovies) {
    const moviesS = Bacon.update(initialMovies,
      [d.stream('remove')], removeMovie,
      [d.stream('create')], createMovie,
      [d.stream('update')], updateMovie,
      [d.stream('find')], findMovie
    );

    function createMovie(movies, title, genre, actors, year, rating) {
      return movies.concat([{
          id: Date.now(),
          title: title,
          genre: genre,
          actors: actors,
          year: year,
          rating: rating
      }])
    }

    function removeMovie(movies, movieIdToRemove) {
      return R.reject(mv => mv.id === movieIdToRemove, movies)
    }

    function updateMovie(movies, {movieId, title}) {
      return R.map(updateMovie(movieId, mv => R.merge(mv, {title})), movies)
    }

    function findMovie(movies, query) {
      return movies.concat([{id: Date.now(), title: newMovieTitle, states: []}])
    }
  },

  // "public" methods

  createMovie: function(title) {
    d.push('create', title)
  },

  removeMovie: function(movieId) {
    d.push('remove', movieId)
  },

  setInfo: function(movieId, title) {
    d.push('update', {movieId, title})
  },

  setEditing: function(movieId, editing) {
    d.push(editing ? 'addState' : 'removeState', {movieId, state: 'editing'})
  }

}

