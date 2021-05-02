import React from "react";
import ReusablePlantForm from "./ReusablePlantForm";
import firebase from "./../firebase/index";
import PropTypes from "prop-types";

function EditPlant(props) {
  const plantToUpdate = props.selectedPlant;

  function updatePlantInFirestore(event) {
    event.preventDefault();
    props.onPlantUpdate();

    return firebase.db.collection("plants").doc(plantToUpdate.id).update(
      {
        plantName: event.target.plantName.value,
        species: event.target.species.value,
        notes: event.target.notes.value,
        yellowAlertAt: event.target.yellowAlertAt.value,
        redAlertAt: event.target.redAlertAt.value,
        machineName: event.target.machineName.value
      }
    )
  }
  
  return (
    <React.Fragment>
      <div className="plantCard">
        <ReusablePlantForm
        originalValues = { plantToUpdate } 
        formSubmissionHandler = { updatePlantInFirestore }
        buttonText = "Submit Changes"/>
      </div>
    </React.Fragment>
  )
}

EditPlant.propTypes = {
  onPlantUpdate: PropTypes.func,
  selectedPlant: PropTypes.object
}

export default EditPlant;