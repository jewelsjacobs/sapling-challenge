const Cycle = require('cycle-react');
const React = require('react');

const Header = Cycle.component('Header', function (interactions, props) {
    let onInputSubmit = interactions.get('onSubmit')
        .do(e => e.preventDefault())
        .map(e => e.target.elements.newTodo.value);
    let onInputKeyUp = interactions.get('onKeyUp');
    let onInputChange = interactions.get('onChange');

    return {
        view: props.get('input').map(input =>
            <header>
                <h1>todos</h1>
                <form className="new-todo-form"
                      onSubmit={interactions.listener('onSubmit')}>
                    <input className="new-todo"
                           type="text"
                           onKeyUp={interactions.listener('onKeyUp')}
                           onChange={interactions.listener('onChange')}
                           value={input}
                           placeholder="What needs to be done?"
                           autoFocus={true}
                           name="newTodo" />
                </form>
            </header>
        ),
        events: {
            onInputSubmit,
            onInputKeyUp,
            onInputChange
        }
    };
});

export default Header;
