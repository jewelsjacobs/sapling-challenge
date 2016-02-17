const React    = require('react'),
      R        = require('ramda'),
      Movie = require('./movie'),
      movies    = require('./../stores/movies');

module.exports = React.createClass({

  render: function() {
    const allCompleted = R.all(movies.isCompleted, this.props.movies);
    return (
      <section id="main">
        <input
          id="toggle-all"
          type="checkbox"
          checked={allCompleted}
          onChange={e => movies.setAllCompleted(e.target.checked)}
          />
        <ul id="movie-list">
          {R.map(mv => mv.display ? <Movie key={mv.id} movie={mv} /> : '', this.props.movies)}
        </ul>
      </section>
    )
  }

});
