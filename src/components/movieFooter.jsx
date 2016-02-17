const React  = require('react'),
      R      = require('ramda'),
      movies  = require('./../stores/movies'),
      filter = require('./../stores/filter');

module.exports = React.createClass({
  render: function() {
    const moviesLeft     = R.filter(R.compose(R.not, movies.isCompleted), this.props.movies).length,
          currentFilter = this.props.filter;

    return (
      <footer id="footer">
        <span id="movie-count">
          <strong>{moviesLeft}</strong> {moviesLeft === 1 ? 'movie' : 'movies'} left
        </span>
        <ul id="filters">
          {filterBtn({name: 'All', id: 'all'})}
          {' '}
          {filterBtn({name: 'Active', id: 'active'})}
          {' '}
          {filterBtn({name: 'Completed', id: 'completed'})}
        </ul>

        {this.props.movies.length - moviesLeft > 0 ?
          <button
            id="clear-completed"
            onClick={movies.removeCompleted}>
            Clear completed
          </button>
          : ''
        }
      </footer>
    )

    function filterBtn({name, id}) {
      return (
        <li>
          <a className={currentFilter === id ? 'selected' : ''} onClick={R.partial(filter.reset, id)}>
            {name}
          </a>
        </li>
      )
    }
  }
})
