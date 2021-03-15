import React from "react";
import PropTypes from "prop-types";

function ReusablePlantForm(props) {

  const { plantName, species, notes, yellowAlertAt, redAlertAt, machineName } = props.originalValues;

  console.log("ReusablePlantForm machineName", machineName);

  return(
    <>
      <hr/>
      <form onSubmit={props.formSubmissionHandler}>
        <label htmlFor="plantName">Name: </label> 
        <input
        type = "text"
        name = "plantName"
        defaultValue = { plantName }
        required />
        <br/>
        <label htmlFor="species">Species: </label> 
        <input
        type = "text"
        name = "species"
        defaultValue = { species } />
        <br/>
        <label htmlFor="notes">Notes: </label> 
        <textarea
        type = "text"
        name = "notes"
        defaultValue = { notes } />
        <br/>
        <label htmlFor="yellowAlertAt">Yellow Alert Level: </label> 
        <input
        type = "number"
        name = "yellowAlertAt"
        defaultValue = { yellowAlertAt } />
        <br/>
        <label htmlFor="redAlertAt">Red Alert Level: </label> 
        <input
        type = "number"
        name = "redAlertAt"
        defaultValue= { redAlertAt } />
        <br/>
        <label htmlFor="machineName">Machine Name: </label> 
        <input
        type = "text"
        name = "machineName"
        defaultValue = { machineName } 
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