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
    console.log("handleDeletingPlantAndData reached");

    const { plantName, machineName, id } = this.state.selectedPlant;
    
    firebase.db.collection("plants").doc(id).delete();

    firebase.db.collection("hardware").where("machineName", "==", machineName).get().then(
      function(querySnapshot) {
        // var batch = firebase.db.batch();
        querySnapshot.forEach(function(doc) {
          // batch.delete(doc.ref);
          doc.ref.delete();
        });
        // return batch.commit();
      },
      console.log(plantName + " and its data have been deleted"),
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
    console.log("handelClickToPlantDetails reachec");
    this.setState({
      plantListView: false,
      plantDetailsView: true,
      newPlantView: false,
      editPlantView: false,
      deletePlantView: false
    })
  }
  
  handleClickToEditPlantView = () => {
    console.log("handleClickToEditPlant reached");
    this.setState({
      plantListView: false,
      plantDetailsView: false,
      newPlantView: false,
      editPlantView: true,
      deletePlantView: false
    })
  }

  handleClickToDeletePlantView = () => {
    console.log("handleClicktoDeletePlant reached");
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
    console.log("Reached 'handleChangingSelectedPlant'");
    console.log(id);
    
    firebase.db.collection("plants").doc(id).get().then(doc => {
      const plant = doc.data();
      // console.log("selectedPlant id", plant);
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
        </React.Fragment>
      );
    }
  }
}

export default PlantControl