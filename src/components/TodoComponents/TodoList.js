// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        //const todoItems = this.props.items.map(item => {
        //    return (<div><Todo key={item.id} task={item.task}/></div>);
        //});
        return (
            <div>
               <Todo task={this.props.items[0].task} /> 
            </div>
        );
    }
}

export default TodoList;