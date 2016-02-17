import React from 'react';
import Rx from 'rx';
import {component} from 'cycle-react';
import 'bootstrap/less/bootstrap.less';

const App = component('App', () => Rx.Observable.just(
  <h1>Hello, World.</h1>
));

export default App;
