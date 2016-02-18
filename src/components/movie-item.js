const Cycle = require('cycle-react');
const Rx = require('rx');
const React = require('react');

const MovieItem = Cycle.component('ManyItem', function (interactions, props) {
    const genre$ = props.get('genre').shareReplay(1);
    const actors$ = props.get('actors').shareReplay(1);
    const title$ = props.get('title').shareReplay(1);
    const year$ = props.get('year').shareReplay(1);
    const rating$ = props.get('rating').shareReplay(1);

    let onInputSubmit = interactions.get('onSubmit')
        .do(e => e.preventDefault())
        .map(e => {
            return {
                genre: e.target.elements['genre'].value,
                actors: e.target.elements['actors'].value,
                title: e.target.elements['title'].value,
                year: e.target.elements['year'].value,
                rating: e.target.elements['rating'].value
            }
        });
    let onInputKeyUp = interactions.get('onKeyUp');
    let onInputChange = interactions.get('onChange');

    const vtree$ = Rx.Observable
        .combineLatest(genre$, actors$, title$, year$, rating$, function (genres, actors, title, year, rating) {
            let genresList = ['Comedy', 'Romance', 'Horror', 'Action', 'Family', 'Sci-Fi'];
            return <div>
                <form onSubmit={interactions.listener('onSubmit')}>
                    <div className="form-group">
                        <label>Genres</label>
                        <select className="form-control"
                                value={genres}
                                onChange={interactions.listener('onChange')}
                                name="genre">
                            <option key="default" disabled defaultValue>Choose A Genre</option>
                            {genresList.map(genre => <option key={genre} value={genre}>{genre}</option>)}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Actors</label>
                        <input type="text"
                               value={actors}
                               name="actors"
                               className="form-control"
                               placeholder="i.e. Keanu Reeves, Laurence Fishburne"
                               onKeyUp={interactions.listener('onKeyUp')}
                               onChange={interactions.listener('onChange')}
                        />
                    </div>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text"
                               value={title}
                               name="title"
                               className="form-control"
                               placeholder="i.e. The Matrix"
                               onKeyUp={interactions.listener('onKeyUp')}
                               onChange={interactions.listener('onChange')}
                        />
                    </div>
                    <div className="form-group">
                        <label>Year</label>
                        <input type="text"
                               value={year}
                               name="year"
                               className="form-control"
                               maxLength="4"
                               placeholder="i.e. 1999"
                               onKeyUp={interactions.listener('onKeyUp')}
                               onChange={interactions.listener('onChange')}
                        />
                    </div>
                    <div className="form-group">
                        <label>Rating</label>
                        <input type="number"
                               value={rating}
                               name="rating"
                               min="1"
                               max="5"
                               className="form-control"
                               onChange={interactions.listener('onChange')}
                        />
                    </div>
                    <button type="submit" className="btn btn-default">Add Movie</button>
                </form>
            </div>;
            });

        return {
            view: vtree$,
            events: {
                onInputSubmit: onInputSubmit,
                onInputKeyUp: onInputKeyUp,
                onInputChange: onInputChange
            }
        };
    });

module.exports = MovieItem;


