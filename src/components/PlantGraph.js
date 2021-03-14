import React from "react";
import firebase from "./../firebase/index";
import CanvasJSReact from "./../canvasjs.react"; 


//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PlantGraph extends React.Component {
  constructor() {
    super();
    this.state = {
      masterPlantList: [{}]
    }
  }


  componentDidMount() {
    const doc = firebase.db.collection("hardware").orderBy("dateTime");
    doc.onSnapshot(docSnapshot => {
      // console.log(`received doc snapshot: ${docSnapshot}`);
      const result = docSnapshot.docs.map( doc => {
      return {...doc.data(), id: doc.id};
      })
      this.setState({masterPlantList: result});
    }, err => {
      console.log(`There has been an error: ${err}`);
    });
  }

  render() {
    const graphData = this.state.masterPlantList.map( dataPoint => {
      return { x: new Date(dataPoint.dateTime), y: dataPoint.moisture }
    })
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
        name: "selectedPlant",
        showInLegend: true,
        dataPoints: graphData
        
      }]
    }
    
    if (!options || !this.state.masterPlantList) {
      return <>Loading...</>
    } else { 
      
      return (
        <React.Fragment>
          {console.log(this.state.masterPlantList)}
          {console.log("graphData", graphData)}
          <CanvasJSChart options={options} />
        </React.Fragment>
      );
    }
  }
}

export default PlantGraph;