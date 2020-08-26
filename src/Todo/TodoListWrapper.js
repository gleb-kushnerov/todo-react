import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';

class TodoListWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.toggleItem = props.toggleItem;
        this.removeItem = props.removeItem;
    }
    render() {
        return (
            <section className='todo-wrapper'>
                <TodoList
                    toggleItem={this.toggleItem}
                    removeItem={this.removeItem}
                    todoState={this.todoState}
                />
            </section>
        )
    }
}


TodoListWrapper.propTypes = {
    todoState: PropTypes.object,
    todoList: PropTypes.arrayOf(PropTypes.object),
    toggleItem: PropTypes.func,
    sortStyle: PropTypes.string
};

export default TodoListWrapper;
