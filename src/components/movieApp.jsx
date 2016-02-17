const React      = require('react'),
      Input = require('react-bootstrap').Input,
      ButtonInput = require('react-bootstrap').ButtonInput,
      MovieList   = require('./movieList'),
      MovieFooter = require('./movieFooter'),
      movies      = require('./../stores/movies');

const GENRES = ['Romance', 'Sci-Fi', 'Action', 'Horror',
      'Comedy', 'Family', 'Animation', 'Documentary'];

module.exports = React.createClass({

  getInitialState: function() {
    return {
      title: '',
      genre: '',
      actors: '',
      year: '',
      rating: ''
    }
  },

  handleTextChange: function(e) {
    switch (e.target.id) {
      case "new-movie-title":
        this.setState({title: e.target.value});
        break;
      case "new-movie-genre":
        this.setState({genre: e.target.value});
        break;
      case "new-movie-actors":
        this.setState({actors: e.target.value});
        break;
      case "new-movie-year":
        this.setState({year: e.target.value});
        break;
      case "new-movie-rating":
        this.setState({rating: e.target.value});
        break;
    }
  },

  handleClick: function(e) {
    if (e.which === 13 && this.state.text) {   // 13 == enter
      movies.createMovie(this.state.title, this.state.genre, this.state.actor, this.state.year, this.state.rating);
      this.setState({
        title: '',
        genre: '',
        actor: '',
        year: '',
        rating: ''
      })
    }

    var createMovie = function(field) {
      if (this.state[field]) {

      }
    }

    if (e.which === 13) {
      switch (e.target.id) {
        case "new-movie-title":
          this.setState({title: e.target.value});
          break;
        case "new-movie-genre":
          this.setState({genre: e.target.value});
          break;
        case "new-movie-actors":
          this.setState({actors: e.target.value});
          break;
        case "new-movie-year":
          this.setState({year: e.target.value});
          break;
        case "new-movie-rating":
          this.setState({rating: e.target.value});
          break;
      }
    }
  },

  render: function() {
    return (
      <div>
        <header id="header">
          <h1>Movies</h1>
          <form className="form-horizontal">
            <Input type="text" autoFocus={true} label="Movie Title" id="new-movie-title" placeholder="Enter movie title" labelClassName="col-xs-2" wrapperClassName="col-xs-10" onChange={this.handleTextChange} value={this.state.title} />
            <Input type="select" label="Movie Genre(s)" multiple labelClassName="col-xs-2" wrapperClassName="col-xs-10" onChange={this.handleTextChange} id="new-movie-genre" value={this.state.genre} >
              <option value="select">Select Movie Genre(s)</option>
              <option value="Romance">Romance</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Action">Action</option>
              <option value="Horror">Horror</option>
              <option value="Comedy">Comedy</option>
              <option value="Family">Family</option>
              <option value="Animation">Animation</option>
              <option value="Documentary">Documentary</option>
            </Input>
            <Input type="textarea" id="new-movie-actors" label="Movie Actors" placeholder="Actors separated by comma, ie: Tom Cruz, Rob Lowe" labelClassName="col-xs-2" wrapperClassName="col-xs-10" onChange={this.handleTextChange} value={this.state.actor}/>
            <Input type="text" id="new-movie-year" label="Movie Year" maxlength="4" placeholder="Enter movie year" labelClassName="col-xs-2" wrapperClassName="col-xs-10" onChange={this.handleTextChange} value={this.state.year} />
            <Input type="number" id="new-movie-rating" label="Movie Rating" placeholder="Enter movie rating, number 1-5" labelClassName="col-xs-2" wrapperClassName="col-xs-10" onChange={this.handleTextChange} value={this.state.rating} />
            <ButtonInput bsStyle="info" type="submit" value="Add" onClick={this.handleClick} />
          </form>
        </header>
        <MovieList movies={this.props.movies} />
        <MovieFooter movies={this.props.movies} filter={this.props.filter} />
      </div>
    )
  }

});
