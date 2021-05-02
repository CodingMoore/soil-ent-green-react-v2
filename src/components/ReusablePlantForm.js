import React from "react";
import PropTypes from "prop-types";

function ReusablePlantForm(props) {
  let defaultValues = {};

  if(props.originalValues) {
    const { plantName, species, notes, yellowAlertAt, redAlertAt, machineName } = props.originalValues;
    defaultValues = {
      defaultPlantName:  plantName,
      defaultSpecies: species,
      defaultNotes: notes,
      defaultYellowAlertAt: yellowAlertAt,
      defaultRedAlertAt: redAlertAt,
      defaultMachineName: machineName
    }
  } else {
    defaultValues = {
      defaultPlantName: null,
      defaultSpecies: null,
      defaultNotes: null,
      defaultYellowAlertAt: null,
      defaultRedAlertAt: null,
      defaultMachineName: null
    }
  }
  
  return(
    <>
      <hr/>
      <form onSubmit={props.formSubmissionHandler}>
        <label htmlFor="plantName">Name: </label> 
        <input
        type = "text"
        name = "plantName"
        defaultValue = { defaultValues.defaultPlantName }
        required />
        <br/>
        <label htmlFor="species">Species: </label> 
        <input
        type = "text"
        name = "species"
        defaultValue = { defaultValues.defaultSpecies } />
        <br/>
        <label htmlFor="notes">Notes: </label> 
        <textarea
        type = "text"
        name = "notes"
        defaultValue = { defaultValues.defaultNotes } />
        <br/>
        <label htmlFor="yellowAlertAt">Yellow Alert Level: </label> 
        <input
        type = "number"
        name = "yellowAlertAt"
        defaultValue = { defaultValues.defaultYellowAlertAt } />
        <br/>
        <label htmlFor="redAlertAt">Red Alert Level: </label> 
        <input
        type = "number"
        name = "redAlertAt"
        defaultValue= { defaultValues.defaultRedAlertAt } />
        <br/>
        <label htmlFor="machineName">Machine Name: </label> 
        <input
        type = "text"
        name = "machineName"
        defaultValue = { defaultValues.defaultMachineName } 
        required />
        <br/>
        <button type="submit">{props.buttonText}</button>
      </form>
      <hr/>
    </>
  );
}

ReusablePlantForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusablePlantForm;