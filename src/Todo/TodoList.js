import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";
import Context from "./context";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.toggleItem = props.toggleItem;
        this.removeItem = props.removeItem;
    }

    render() {
        let todos = [];
        if (this.context.sortStyle === 'active') {
            todos = this.context.todoList.filter(element => {
                return !element.completed;
            })
        } else if (this.context.sortStyle === 'completed') {
            todos = this.context.todoList.filter(element => {
                return element.completed;
            })
        } else if (this.context.sortStyle === 'all') {
            todos = this.context.todoList;
        }
        return (
            <ul className='todo-list'>
                {todos.map(todo => {
                    return (
                        <TodoItem todo={todo} toggleItem={this.toggleItem} removeItem={this.removeItem} key={todo.id}/>
                    )
                })}
            </ul>
        )
    }
}

TodoList.contextType = Context;

TodoList.protoType = {
    toggleItem: PropTypes.func,
    sortStyle: PropTypes.string
};

export default TodoList;
