let React = require('react');
let ReactDOM = require('react-dom');
let Cycle = require('cycle-react');
let movieIntent = require('./movie-intent');
let model = require('./movie-model');
let view = require('./movie-view');
/*
 sink can read from any datasource
 source can write from any datasource
 In this case its localstorage
 */
import { sink, source } from './api/local-storage';

import 'bootstrap/less/bootstrap.less';

let Root = Cycle.component('Root', function computer(interactions) {
    let intent = movieIntent(interactions);
    let movie$ = model(intent, source());
    movie$.subscribe(sink);
    return view(movie$, interactions);
});

ReactDOM.render(
    <Root />,
    document.querySelector('.container-fluid')
);