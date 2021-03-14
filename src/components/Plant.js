import React from "react";
import PropTypes from "prop-types";

function Plant(props) {

  return (
    <>
      <hr/>
      <div onClick = {() => props.whenPlantClicked(props.id)}>
        <h3>{props.plantName}</h3>
        <h4>{props.species}</h4>
        <h4>{props.notes}</h4>
        <h4>{props.yellowAlertAt}</h4>
        <h4>{props.redAlertAt}</h4>
        <h4>{props.machineName}</h4>
      </div>
      <hr/>
    </>
  );
}

Plant.propTypes = {
  plantName: PropTypes.string.isRequired,
  species: PropTypes.string,
  notes: PropTypes.string,
  yellowAlertAt: PropTypes.number,
  redAlertAt: PropTypes.number,
  machineName: PropTypes.string.isRequired
}

export default Plant;