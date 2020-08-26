import React from 'react';
import PropTypes from 'prop-types'

 class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.addItem = props.addItem;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <input
                className='input-field'
                type="text"
                placeholder="What needs to be done?"
                value={this.state.value}
                onKeyDown={this.keyDownHandler}
                onChange={this.changeHandler}
            />
        )
    }

     keyDownHandler(event) {
         if (event.keyCode === 13 && event.target.value.trim()) {
             this.addItem(event);
             this.setState({
                 value: ''
             })
         }
     }

     changeHandler(event) {
        this.setState({
            value: event.target.value
        });
     }
}

TodoInput.propTypes = {
    addItem: PropTypes.func
};

export default TodoInput;
