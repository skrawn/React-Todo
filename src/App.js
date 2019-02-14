import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      items: [
        {
          task: '',
          id: 0,
          complete: false
        }
      ]
    };
    
    this.addNewItem = this.addNewItem.bind(this);
  }

  addNewItem(task) {
    const items = this.state.items.slice();
    const newItem = {
      task: task,
      id: items[items.length - 1].id + 1,
      complete: false
    };
    items.push(newItem);
    this.setState(
  }

  render() {
    return (
      <div>
        <TodoList items={this.state.items} />
        <TodoForm itemHandler={this.addNewItem}/>  
      </div>
    );
  }
}

export default App;
