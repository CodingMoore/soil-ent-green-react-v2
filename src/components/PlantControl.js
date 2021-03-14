import React from "react";
import PlantList from "./PlantList";
import NewPlant from "./NewPlant";
import PlantDetails from "./PlantDetails";
import firebase from "./../firebase/index";
import "firebase/auth";


class PlantControl extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedPlant: null,
      plantListView: true,
      plantDetailsView: false,
      newPlantView: false
    }
  }

  handleClickToNewPlantView = () => {
    this.setState({
      plantListView: false,
      newPlantView: true
    })
  }


  handleClickToPlantListView = () => {
    this.setState({
      plantListView: true,
      newPlantView: false
    })
  }

  handleChangingSelectedPlant = (id) => {
    console.log("Reached 'handleChangingSelectedPlant'");
    console.log(id);
    
    firebase.db.collection("plants").doc(id).get().then(doc => {
      const plant = doc.data();
      const newSelectedPlant = {
        plantName: plant.plantName,
        species: plant.species,
        notes: plant.notes,
        yellowAlertAt: plant.yellowAlertAt,
        redAlertAt: plant.redAlertAt,
        machineName: plant.machineName,
        id: plant.id
      }
      this.setState({
        selectedPlant: newSelectedPlant,
        plantListView: false,
        plantDetailsView: true
      })
    });
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
      let currentlyVisibleState = null;
      // let buttonTest = null;
      if (this.state.plantDetailsView) {
        currentlyVisibleState = <PlantDetails 
        selectedPlant = { this.state.selectedPlant }/>
      }
      if (this.state.newPlantView) {
        currentlyVisibleState = <NewPlant 
        onNewPlantCreation = { this.handleClickToPlantListView }/>
      }
      if (this.state.plantListView) {
        currentlyVisibleState = <PlantList 
        onPlantSelection = { this.handleChangingSelectedPlant }
        />
        return (
          <React.Fragment>
            { currentlyVisibleState }
            <button onClick = { this.handleClickToNewPlantView }>Add New Plant</button>
          </React.Fragment>
        )
      }
      return (
        <React.Fragment>
          { currentlyVisibleState }
          <button onClick = { this.handleClickToPlantListView }>My Plants</button>
        </React.Fragment>
      );
    }
  }
}

export default PlantControl