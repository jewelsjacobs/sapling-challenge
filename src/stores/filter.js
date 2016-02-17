import * as Dispatcher from './dispatcher'
const d = new Dispatcher();

export default {
  toProperty: function(initialFilter) {
    return d.stream('reset').scan(initialFilter, (_, newFilter) => newFilter)
  },

  reset: function(newFilter) {
    window.location.hash = newFilter;
    d.push('reset', newFilter)
  }
}
