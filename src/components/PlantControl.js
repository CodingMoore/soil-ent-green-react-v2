import React from "react";
import PlantGraph from "./PlantGraph";
//import firebase from "./../firebase/index";


class PlantControl extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedPlant: null
    }
  }

  render() {
    
    return (
      <React.Fragment>
        <PlantGraph />
      </React.Fragment>
    );
  }
}

export default PlantControl