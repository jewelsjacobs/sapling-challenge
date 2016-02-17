const React = require('react'),
      Input = require('react-bootstrap').Input,
      movies = require('./../stores/movies');

module.exports = React.createClass({

  startEditing: function() {
    const node = React.findDOMNode(this.refs.editField),
          movie = this.props.movie;

    movies.setEditing(movie.id, true);
    node.focus();
    node.setSelectionRange(0, node.value.length)
  },

  stopEditing: function() {
    const movie = this.props.movie;
    if (movie.title) {
      movies.setEditing(movie.id, false)
    } else {
      movies.removeMovie(movie.id)
    }
  },

  handleKeyDown: function(e) {
    if (e.which === 13) {
      this.stopEditing()
    }
  },

  handleChange: function(e) {
    movies.setInfo(this.props.movie.id, e.target.value)
  },

  render: function() {
    const movie = this.props.movie;
    return (
      <li className={movie.states.join(' ')}>
        <div className="view">
          <label onDoubleClick={this.startEditing}>
            {movie.title} - {movie.genre} - {movie.actors} - {movie.year} - {movie.rating}
          </label>
          <button className="destroy" onClick={() => movies.removeMovie(movie.id)}/>
        </div>
        <form className="form-horizontal">
          <Input type="text" label={movie.title} labelClassName="col-xs-2" wrapperClassName="col-xs-10" ref="editField" onBlur={this.stopEditing} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
          <Input type="text" label={movie.genre} labelClassName="col-xs-2" wrapperClassName="col-xs-10" ref="editField" onBlur={this.stopEditing} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
          <Input type="text" label={movie.actors} labelClassName="col-xs-2" wrapperClassName="col-xs-10" ref="editField" onBlur={this.stopEditing} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
          <Input type="text" label={movie.year} labelClassName="col-xs-2" wrapperClassName="col-xs-10" ref="editField" onBlur={this.stopEditing} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
          <Input type="text" label={movie.rating} labelClassName="col-xs-2" wrapperClassName="col-xs-10" ref="editField" onBlur={this.stopEditing} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
        </form>

      </li>
    )
  }
});


