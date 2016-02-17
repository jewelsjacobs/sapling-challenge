'use strict';
const Cycle = require('cycle-react');
const React = require('react');
import Header from './components/header';
import MainSection from './components/main';
import Footer from './components/footer';

module.exports = function view(todos$, interactions) {
  return todos$.map(todos =>
    <div>
      <Header input={todos.input}
              onInputSubmit={interactions.listener('onInputSubmit')}
              onInputKeyUp={interactions.listener('onInputKeyUp')}
              onInputChange={interactions.listener('onInputChange')} />
      <MainSection list={todos.list}
                   filterFn={todos.filterFn}
                   onItemNewContent={interactions.listener('onItemNewContent')}
                   onItemToggle={interactions.listener('onItemToggle')}
                   onItemDestroy={interactions.listener('onItemDestroy')}
                   onToggleAll={interactions.listener('onToggleAll')} />
      <Footer list={todos.list}
              filter={todos.filter}
              onClearCompleted={interactions.listener('onClearCompleted')} />
    </div>
  );
};
