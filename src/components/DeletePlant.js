import React from "react";
import PropTypes from "prop-types";

function DeletePlant(props) {
  return (
    <React.Fragment>
      <h1>Are you sure you want to permenently delete this plant and its associated data?</h1>
      <button onClick = {props.onClickingConfirm}>Yes Delete Plant</button>
      <button onClick = {props.onClickingDeny}>Nevermind!</button>
    </React.Fragment>
  )
}

DeletePlant.propTypes = {
  onClickingConfirm: PropTypes.func,
  onClickingDeny: PropTypes.func
}

export default DeletePlant;