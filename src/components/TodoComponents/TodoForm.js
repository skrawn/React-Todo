import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.itemHandler(this.state.value);
    }

    render() {
        return (
        <div className="todoForm">
            <form>
                {/* <input type="text" name="todoInput" value={props.input} placeholder="...todo" />  */}
                <input type="text" name="todoInput" value={this.state.value} placeholder="...todo" 
                   onChange={this.handleChange} 
                /> 
                
                <button onClick={this.handleSubmit}>Add Todo</button>
                <button>Clear Completed</button>
            </form> 
        </div>
        );
    }
}

export default TodoForm;