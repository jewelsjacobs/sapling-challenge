'use strict';

const React = require('react');
const MovieItem = require('./components/movie-item');

module.exports = function view(movies$, interactions) {
    movies$.map(movies => console.log(movies));
    return movies$.map(movies =>
        <div>
            <MovieItem genre={movies.genre}
                       actors={movies.actors}
                       title={movies.title}
                       year={movies.year}
                       rating={movies.rating}
                       onInputKeyUp={interactions.listener('onInputKeyUp')}
                       onInputChange={interactions.listener('onInputChange')}
                       onInputSubmit={interactions.listener('onInputSubmit')} />
        </div>
    );
};