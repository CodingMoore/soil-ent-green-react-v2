import React from "react";
import PlantList from "./PlantList";
import NewPlant from "./NewPlant";
import DeletePlant from "./DeletePlant";
import EditPlant from "./EditPlant";
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
      newPlantView: false,
      editPlantView: false,
      deletePlantView: false
    }
  }

  handleDeletingPlantAndData = () => {
    const { machineName, id } = this.state.selectedPlant;
    
    firebase.db.collection("plants").doc(id).delete();

    firebase.db.collection("hardware").where("machineName", "==", machineName).get().then(
      function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          doc.ref.delete();
        });
      },
      this.setState({
        plantListView: true,
        plantDetailsView: false,
        newPlantView: false,
        editPlantView: false,
        deletePlantView: false
      }),
      );
  }

  handleClickToPlantDetailsView = () => {
    this.setState({
      plantListView: false,
      plantDetailsView: true,
      newPlantView: false,
      editPlantView: false,
      deletePlantView: false
    })
  }
  
  handleClickToEditPlantView = () => {
    this.setState({
      plantListView: false,
      plantDetailsView: false,
      newPlantView: false,
      editPlantView: true,
      deletePlantView: false
    })
  }

  handleClickToDeletePlantView = () => {
    this.setState({
      plantListView: false,
      plantDetailsView: false,
      newPlantView: false,
      editPlantView: false,
      deletePlantView: true
    })
  }

  handleClickToNewPlantView = () => {
    this.setState({
      plantListView: false,
      plantDetailsView: false,
      newPlantView: true,
      editPlantView: false,
      deletePlantView: false
    })
  }

  handleClickToPlantListView = () => {
    this.setState({
      plantListView: true,
      plantDetailsView: false,
      newPlantView: false,
      editPlantView: false,
      deletePlantView: false
    })
  }

  handleChangingSelectedPlant = (id) => {
    
    firebase.db.collection("plants").doc(id).get().then(doc => {
      const plant = doc.data();
      const newSelectedPlant = {
        plantName: plant.plantName,
        species: plant.species,
        notes: plant.notes,
        yellowAlertAt: plant.yellowAlertAt,
        redAlertAt: plant.redAlertAt,
        machineName: plant.machineName,
        id: id
      }
      this.setState({
        selectedPlant: newSelectedPlant,
        plantListView: false,
        plantDetailsView: true,
        newPlantView: false,
        editPlantView: false,
        deletePlantView: false
      })
    });
  }
  
  render() {
    const auth = firebase.auth.currentUser;

    if (!auth) {
      return (
      <h1 className="plantCard" id="loginText">You must sign in to access your plants!</h1>
      )
    } else {
      let currentlyVisibleState = null;
      
      if (this.state.plantDetailsView) {
        currentlyVisibleState = <PlantDetails 
        selectedPlant = { this.state.selectedPlant }
        onClickingEdit = { this.handleClickToEditPlantView }
        onClickingDelete = { this.handleClickToDeletePlantView }/>
      }
      if (this.state.editPlantView) {
        currentlyVisibleState = <EditPlant
        selectedPlant = { this.state.selectedPlant }
        onPlantUpdate = { this.handleClickToPlantListView } />
      }
      if (this.state.newPlantView) {
        currentlyVisibleState = <NewPlant 
        onNewPlantCreation = { this.handleClickToPlantListView }/>
      }
      if (this.state.deletePlantView) {
        currentlyVisibleState = <DeletePlant 
        onClickingConfirm = {this.handleDeletingPlantAndData}
        onClickingDeny = {this.handleClickToPlantDetailsView} />
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
          <br/>
          <br/>
        </React.Fragment>
      );
    }
  }
}

export default PlantControl