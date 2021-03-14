import React from "react";
import PlantGraph from "./PlantGraph";
import PlantList from "./PlantList";
import NewPlant from "./NewPlant";
import firebase from "./../firebase/index";
import "firebase/auth";


class PlantControl extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedPlant: null
    }
  }

  handleAddingNewPlantToList() {
    console.log("Reached 'handleAddingNewPlantToList' in PlantControl");
  }

  render() {
    // WORKS
    // console.log("firebase", firebase.auth.currentUser.email);
    const auth = firebase.auth.currentUser;
    if (!auth) {
      return (
      <h1>You must sign in to access your plants!</h1>
      )
    } else {
      return (
        <React.Fragment>
          <PlantGraph />
          <PlantList 
          onPlantSelection = { this.handleChangingSelectedPlant }/>
          <NewPlant 
          onNewPlantCreation = { this.handleAddingNewPlantToList }/>
          
        </React.Fragment>
      );
    }
  }
}

export default PlantControl