const React   = require('react'),
      Bacon   = require('baconjs'),
      MovieApp = require('./components/movieApp'),
      movies   = require('./stores/movies'),
      filter  = require('./stores/filter');

const filterP = filter.toProperty(window.location.hash.substring(1) || 'all'),
      moviesP  = movies.toMoviesProperty([], filterP);

const appState = Bacon.combineTemplate({
  movies: moviesP,
  filter: filterP
});

appState.onValue((state) => {
  React.render(<MovieApp {...state} />, document.getElementById('movieapp'))
});
