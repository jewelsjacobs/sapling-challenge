let Rx = require('rx');
let {Map, fromJS} = require('immutable');

export function sink(moviesData) {
  // Observe all movies data and save them to localStorage
  let moviesList = moviesData.list.toJS();
  localStorage.setItem('movies-cycle-react@2', JSON.stringify(moviesList));
};

export function source() {
  let stored = JSON.parse(localStorage.getItem('movies-cycle-react@2'));
  let initialMoviesData = fromJS({
    list: stored || [],
    genre: '',
    actors: '',
    title: '',
    year: '',
    rating: ''
  });
  return Rx.Observable.just(initialMoviesData);
};
