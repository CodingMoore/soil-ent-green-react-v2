import React from "react";
import PropTypes from "prop-types";
import Plant from "./Plant";
import firebase from "./../firebase/index";

class PlantList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userPlantList: [{}]
    }
  }
  
  componentDidMount() {
    const userEmail = firebase.auth.currentUser.email;
    const doc = firebase.db.collection("plants").where("user", "==",  userEmail).orderBy("plantName");
    console.log(userEmail);
    console.log("doc", doc);
    doc.onSnapshot(docSnapshot => {
      console.log(`received doc snapshot: ${docSnapshot}`);
      const result = docSnapshot.docs.map( doc => {
      return {...doc.data(), id: doc.id};
      })
      console.log("result", result);
      this.setState({userPlantList: result});
    }, err => {
      console.log(`There has been an error: ${err}`);
    });
  }
  render() {
    const userPlants = this.state.userPlantList;
    if (userPlants) {
      return (
        <React.Fragment>
          <hr/>
          {userPlants.map((plant) => {
            return <Plant 
            whenPlantClicked = { this.props.onPlantSelection }
            plantName =  {"Name: " + plant.plantName }
            species = {"Species: " + plant.species }
            id = { plant.id }
            key = { plant.id }/>
            })
          }
          {/* <PlantStatus /> */}
        </React.Fragment>
      );
    } else {
      return (
        <>
          <h3>Loading...</h3>
        </>
      )
    }
  }
}

PlantList.propTypes = {
  onPlantSelection: PropTypes.func
};

export default PlantList; 