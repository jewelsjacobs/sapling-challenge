let Rx = require('rx');
let ESC_KEY = 27;

function movieIntent(interactions) {
    return {
        changeInput$: interactions.get('onInputChange')
            .map(ev => {
              return {
                 value: ev.target.value,
                  name: ev.target.name
                }
            }),
        clearInput$: interactions.get('onInputKeyUp')
            .filter(ev => ev.keyCode === ESC_KEY)
            .map(ev => {
                return {
                    name: ev.target.name
                }
            }),
        insertMovie$: interactions.get('onInputSubmit')
    };
}

module.exports = movieIntent;