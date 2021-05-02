import React from "react";
import PlantGraph from "./PlantGraph";
import PropTypes from "prop-types";

function PlantDetails(props) {
  const plant = props.selectedPlant;

  return (
    <React.Fragment>
      <PlantGraph 
      plantToGraph = { props.selectedPlant }/>
      <div className="plantCard">
        <h3>{"Name: " + plant.plantName }</h3>
        <h4>{"Species: " + plant.species }</h4>
        <h4>{"Notes: " + plant.notes }</h4>
        <h4>{"Yellow Alert At: " + plant.yellowAlertAt }</h4>
        <h4>{"Red Alert At: " + plant.redAlertAt }</h4>
        <h4>{"Machine Name: " + plant.machineName }</h4>
      </div>
      <br/>
      <button onClick = { props.onClickingEdit }>Edit Plant</button>
      <br/>
      <br/>
      <button onClick = { props.onClickingDelete }>Delete Plant</button>
      <hr/>
      <br/>
    </React.Fragment>
  )
}

PlantDetails.propTypes = {
  selectedPlant: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default PlantDetails;