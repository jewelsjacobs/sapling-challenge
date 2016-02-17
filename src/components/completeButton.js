const Cycle = require('cycle-react');
const React = require('react');

const CompleteButton = Cycle.component('CompleteButton', function (interactions, props) {
    let onClearCompleted = interactions.get('onClick');

    return {
        view: props.get('amountCompleted').map(amountCompleted => {
            if (amountCompleted > 0) {
                return <button className="clear-completed"
                               onClick={interactions.listener('onClick')}>
                    Clear completed ({amountCompleted})
                </button>;
            }
            return <div />;
        }),
        events: {
            onClearCompleted
        }
    };
});

export default CompleteButton;