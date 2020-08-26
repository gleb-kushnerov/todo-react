import React from "react";
import PropTypes from 'prop-types';
import Context from "./context";

class TodoFooter extends React.Component {
    constructor(props) {
        super(props);
        this.changeSortStyle = props.changeSortStyle;
        this.onClickHandler = this.onClickHandler.bind(this);
        this.removeCompleted = props.removeCompleted;
        this.state = {
            activeBtn: props.sortStyle
        };
    }

    render() {
        const notFulfilled = this.context.todoList.reduce((acc, item) => {
            if (!item.completed) {
                acc++
            }
            return acc;
        }, 0);
        const quantityText = notFulfilled === 1 ? '1 item left' : `${notFulfilled} items left`;
        const btnTiles = ['All', 'Active', 'Completed'];
        return(
            <footer className="footer">
                <div className="quantity">{quantityText}</div>
                <div className="sort-block" onClick={this.onClickHandler}>
                    {btnTiles.map((tile, index) => {
                        const classes = `btn${this.state.activeBtn === tile.toLowerCase() ? ' -active' : ''}`;
                        return (
                            <button key={index} className={classes} data-sort-style={tile.toLowerCase()}>{tile}</button>
                        )
                    })}
                </div>
                {notFulfilled !== this.context.todoList.length
                    ? <button className="btn" onClick={this.removeCompleted}>Clear completed</button>
                    : null}
            </footer>
        )
    }

    onClickHandler(event) {
        const btn = event.target.closest('[data-sort-style]');
        if (btn) {
            this.changeSortStyle(btn.dataset.sortStyle);
            this.setState({
                activeBtn: btn.dataset.sortStyle
            });
        }
    }
}

TodoFooter.contextType = Context;

TodoFooter.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.object),
    changeSortStyle: PropTypes.func,
    sortStyle: PropTypes.string
};

export default TodoFooter;
