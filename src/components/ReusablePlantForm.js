import React from "react";
import PropTypes from "prop-types";

function ReusablePlantForm(props) {
  return(
    <>
      <hr/>
      <form onSubmit={props.formSubmissionHandler}>
        <label for="plantName">Name: </label> 
        <input
        type = "text"
        name = "plantName" />
        <br/>
        <label for="species">Species: </label> 
        <input
        type = "text"
        name = "species" />
        <br/>
        <label for="notes">Notes: </label> 
        <input
        type = "text"
        name = "notes" />
        <br/>
        <label for="yellowAlertAt">Yellow Alert Level: </label> 
        <input
        type = "text"
        name = "yellowAlertAt" />
        <br/>
        <label for="redAlertAt">Red Alert Level: </label> 
        <input
        type = "text"
        name = "redAlertAt" />
        <br/>
        <label for="hardwareCode">Machine Name: </label> 
        <input
        type = "text"
        name = "hardwareCode" />
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