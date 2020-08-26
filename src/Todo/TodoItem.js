import React from "react";
import RemoveButton from "./RemoveButton";

function TodoItem(props) {
    const classes = `todo-line${props.todo.completed ? ' -done' : ''}`;
    function onChangeHandler(event) {
        props.toggleItem(event);
    }
    return (
        <li className={classes}
            data-id={props.todo.id}>
            <div className="wrapper">
                <label className="label">
                    <input
                        type="checkbox"
                        className="checkbox"
                        checked={props.todo.completed}
                        onChange={onChangeHandler}
                    />
                    <span className="fake-checkbox"/>
                </label>
                {props.todo.title}
            </div>
            <RemoveButton removeItem={props.removeItem}/>
        </li>
    );
}

export default TodoItem;
