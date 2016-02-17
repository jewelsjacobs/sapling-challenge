const Cycle = require('cycle-react');
const React = require('react');
const TodoItem = require('./todo-item');

const MainSection = Cycle.component('MainSection', function (interactions, props) {
    let onItemNewContent = interactions.get('onNewContent');
    let onItemToggle = interactions.get('onToggle');
    let onItemDestroy = interactions.get('onDestroy');
    let onToggleAll = interactions.get('onToggleAll');

    return {
        view: props.distinctUntilChanged().map(({list, filterFn}) => {
            let allCompleted = list.reduce((x, y) => x && y.completed, true);
            let style = {display: list.size ? 'inherit' : 'none'};
            return <section className="main" style={style}>
                <input className="toggle-all"
                       type="checkbox"
                       checked={allCompleted}
                       onChange={interactions.listener('onToggleAll')} />
                <ul className="todo-list">
                    {list
                        .filter(filterFn)
                        .map(item =>
                            <TodoItem key={item.get('id')}
                                      todoid={item.get('id')}
                                      content={item.get('title')}
                                      completed={item.get('completed')}
                                      onNewContent={interactions.listener('onNewContent')}
                                      onToggle={interactions.listener('onToggle')}
                                      onDestroy={interactions.listener('onDestroy')} />
                        ).toArray()}
                </ul>
            </section>;
        }),
        events: {
            onItemNewContent,
            onItemToggle,
            onItemDestroy,
            onToggleAll
        }
    };
});

export default MainSection;