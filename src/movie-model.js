let Rx = require('rx');
let cuid = require('cuid');
let {Map} = require('immutable');

function makeModification$(intent) {
    let insertMovie$ = intent.insertMovie$.map((newMovieData) => (movieData) => {
        return movieData.withMutations(m => {
            m.update('list', list => list.push(Map({
                id: cuid(),
                genre: newMovieData.genre,
                actors: newMovieData.actors,
                title: newMovieData.title,
                year: newMovieData.year,
                rating: newMovieData.rating
            })));
            m.set('genre', '');
            m.set('actors', '');
            m.set('title', '');
            m.set('year', '');
            m.set('rating', '');
        });
    });

    let changeInputMod$ = intent.changeInput$.map((content) => (movieData) => {
        return movieData.set(content.name, content.value);
    });

    let clearInputMod$ = intent.clearInput$.map((content) => (movieData) => {
        return movieData.set(content.name, '');
    });

    return Rx.Observable.merge(
        insertMovie$, changeInputMod$, clearInputMod$
    );
}

function movieModel(intent, source) {
    let modification$ = makeModification$(intent);

    return source.concat(modification$)
        .scan((movieData, modFn) => modFn(movieData))
        .map(movieData => movieData.toObject())
        .shareReplay(1);
}

module.exports = movieModel;