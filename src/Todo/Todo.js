import React from "react";
import TodoInput from "./TodoInput";
import TodoListWrapper from "./TodoListWrapper";
import TodoFooter from "./TodoFooter";
import Context from "./context";

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            todoList: [],
            sortStyle: 'all'
        };
        this.addItem = this.addItem.bind(this);
        this.toggleItem = this.toggleItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.changeSortStyle = this.changeSortStyle.bind(this);
        this.removeCompleted = this.removeCompleted.bind(this)
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                <section className='todo-app'>
                    <h1 className='heading'>Todos</h1>
                    <section className='container'>
                        <header>
                            <TodoInput addItem={this.addItem}/>
                        </header>
                        {this.state.todoList.length
                            ? <TodoListWrapper
                                todoState={this.state}
                                toggleItem={this.toggleItem}
                                removeItem={this.removeItem}
                            />
                            : null}
                        {this.state.todoList.length
                            ? <TodoFooter
                                changeSortStyle={this.changeSortStyle}
                                removeCompleted={this.removeCompleted}
                            />
                            : null
                        }
                    </section>
                </section>
            </Context.Provider>
        )
    }

    addItem(event) {
        const todoItem = {
            title: event.target.value,
            id: Date.now().toString(),
            completed: false
        };
        const todoList = this.state.todoList;
        todoList.push(todoItem);
        this.setState({
            todoList
        });
    }

    toggleItem(event) {
        const todoList = this.state.todoList.map(todoItem => {
            if (todoItem.id === event.target.closest('[data-id]').dataset.id) {
                todoItem.completed = !todoItem.completed;
            }
            return todoItem;
        });

        this.setState({
            todoList
        });
    }

    removeItem(event) {
        const id = event.target.closest('[data-id]').dataset.id;
        const todoList = this.state.todoList.filter(element => {
            return element.id !== id;
        });
        this.setState({
            todoList,
        });
    }

    changeSortStyle(sortStyle) {
        this.setState({
            sortStyle,
        });
    }

    removeCompleted() {
        const todoList = this.state.todoList.filter(element => {
            return !element.completed;
        });
        this.setState({
            todoList,
        });
    }
}

export default Todo;
