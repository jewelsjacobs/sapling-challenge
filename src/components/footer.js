const Cycle = require('cycle-react');
const React = require('react');
import CompleteButton from './completeButton';

const Footer = Cycle.component('Footer', function (interactions, props) {
    let onClearCompleted = interactions.get('onClearCompleted');
    let view = props.distinctUntilChanged().map(({list, filter}) => {
        let amountCompleted = list.count(item => item.get('completed'));
        let amountActive = list.size - amountCompleted;
        let style = {display: list.size ? 'inherit' : 'none'};

        return <footer className="footer" style={style}>
      <span className="todo-count">
        <strong>{amountActive} item{amountActive !== 1 ? 's' : ''} left</strong>
      </span>
            <ul className="filters">
                <li>
                    <a className={filter === '' ? 'selected' : ''}
                       href="#/">
                        All
                    </a>
                </li>
                <li>
                    <a className={filter === 'active' ? 'selected' : ''}
                       href="#/active">
                        Active
                    </a>
                </li>
                <li>
                    <a className={filter === 'completed' ? 'selected' : ''}
                       href="#/completed">
                        Completed
                    </a>
                </li>
            </ul>
            <CompleteButton amountCompleted={amountCompleted}
                            onClearCompleted={interactions.listener('onClearCompleted')} />
        </footer>;
    });
    return {
        view,
        events: {
            onClearCompleted
        }
    };
});

export default Footer;
