import React from "react";
import PropTypes from "prop-types";

function Plant(props) {

  return (
    <>
      <hr/>
      <div onClick = {() => props.whenPlantClicked(props.id)}>
        <h3>Name: {props.plantName}</h3>
        <h4>Species: {props.species}</h4>
        <h4>Notes: {props.notes}</h4>
        <h4>Yellow Alert Level: {props.yellowAlertAt}</h4>
        <h4>Red Alert Level: {props.redAlertAt}</h4>
        <h4>Machine Name: {props.machineName}</h4>
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