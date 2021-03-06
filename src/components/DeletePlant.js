import React from "react";
import PropTypes from "prop-types";

function DeletePlant(props) {
  return (
    <React.Fragment>
      <div className="plantCard">
        <h1 id="deleteText">Are you sure you want to permenently delete this plant and its associated data?</h1>
        <button onClick = {props.onClickingConfirm}>Yes Delete Plant</button>
        <button onClick = {props.onClickingDeny}>Nevermind!</button>
      </div>
    </React.Fragment>
  )
}

DeletePlant.propTypes = {
  onClickingConfirm: PropTypes.func,
  onClickingDeny: PropTypes.func
}

export default DeletePlant;