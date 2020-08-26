import React from "react";
import PropTypes from 'prop-types';

function RemoveButton(props) {
    function onClickHandler(event) {
        props.removeItem(event);
    }
    return (
        <button className="remove-line" onClick={onClickHandler}>
            x
        </button>
    )
}

RemoveButton.propType = {
    removeItem: PropTypes.func
};

export default RemoveButton;
