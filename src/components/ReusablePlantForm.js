import React from "react";
import PropTypes from "prop-types";

function ReusablePlantForm(props) {
  return(
    <>
      <hr/>
      <form onSubmit={props.formSubmissionHandler}>
        <label htmlFor="plantName">Name: </label> 
        <input
        type = "text"
        name = "plantName" required/>
        <br/>
        <label htmlFor="species">Species: </label> 
        <input
        type = "text"
        name = "species" />
        <br/>
        <label htmlFor="notes">Notes: </label> 
        <textarea
        type = "text"
        name = "notes" />
        <br/>
        <label htmlFor="yellowAlertAt">Yellow Alert Level: </label> 
        <input
        type = "text"
        name = "yellowAlertAt" />
        <br/>
        <label htmlFor="redAlertAt">Red Alert Level: </label> 
        <input
        type = "text"
        name = "redAlertAt" />
        <br/>
        <label htmlFor="machineName">Machine Name: </label> 
        <input
        type = "text"
        name = "machineName" required/>
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