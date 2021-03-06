import React from "react";
import ReusablePlantForm from "./ReusablePlantForm";
import PropTypes from "prop-types";
import firebase from "./../firebase/index";

function NewPlant(props) {

  function addPlantToFirestore(event) {
    event.preventDefault();
    props.onNewPlantCreation();
    const userEmail = firebase.auth.currentUser.email;
  
    return firebase.db.collection("plants").add(
        {
          user: userEmail,
          plantName: event.target.plantName.value,
          species: event.target.species.value,
          notes: event.target.notes.value,
          yellowAlertAt: event.target.yellowAlertAt.value,
          redAlertAt: event.target.redAlertAt.value,
          machineName: event.target.machineName.value
        }
    );
  }
  
  return(
    <>
      <div className="plantCard">
        <ReusablePlantForm 
        formSubmissionHandler = { addPlantToFirestore }
        buttonText = "Add New Plant"/>
      </div>
    </>
  );
}

NewPlant.propTypes = {
  onNewPlantCreation: PropTypes.func
};

export default NewPlant;