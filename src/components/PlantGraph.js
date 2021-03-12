import React from "react";
import firebase from "./../firebase/index";

class PlantGraph extends React.Component {
  constructor() {
    super();
    this.state = {
      masterPlantList: null
    }
  }

  componentDidMount() {
    const doc = firebase.db.collection("hardware");
    doc.onSnapshot(docSnapshot => {
      // console.log(`received doc snapshot: ${docSnapshot}`);
      const result = docSnapshot.docs.map( doc => {
      return {...doc.data(), id: doc.id};
      })
      this.setState({masterList: result});
    }, err => {
      console.log(`There has been an error: ${err}`);
    });
  }

  Render() {
    const options = {
      animationEnabled: true,
      title:{
        test:"Soil Moisture Percentage"
      },
      axisY:{
        title: "Moisture Content"
      },  
        toolTip: {
          shared: true
        },
      data: [{
        type: "spline",
        name: "Your Plant",
        showInLegend: true,
        dataPoints: this.state.masterPlantList
      }]
    }
    
    if (!isLoaded || !this.state.masterPlantList) {
      return <>Loading...</>
    } else { 
      
      return (
        <>
        <hr/>
        <p class="compBound">PlantGraph Start</p>
          <CanvasJSChart optons={options} />
        <p class="compBound">PlantGraph End</p>
        <hr/>
        </>
      );
    }
  }
}

export default PlantGraph;