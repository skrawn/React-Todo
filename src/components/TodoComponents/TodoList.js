// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    const todoItems = props.items.map(item => {
        return (<Todo key={item.id} task={item.task}/>);
    });
    return (
        <div>
            {todoItems}
        </div>
    );
}

export default TodoList;