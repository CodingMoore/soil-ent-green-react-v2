import React from "react";
import firebase from "./../firebase/index";
import CanvasJSReact from "./../canvasjs.react";
import PropTypes from "prop-types";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PlantGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlantData: [{}]
    }
  }
  
  componentDidMount() {
    const selectedMachineName = this.props.plantToGraph.machineName
    const doc = firebase.db.collection("hardware").where("machineName", "==", selectedMachineName).orderBy("dateTime");
    
    doc.onSnapshot(docSnapshot => {
      const result = docSnapshot.docs.map( doc => {
        return {...doc.data(), id: doc.id};
        })
      this.setState({selectedPlantData: result});
    }, err => {
      console.log(`There has been an error: ${err}`);
    });
  }

  render() {
    const graphData = this.state.selectedPlantData.map( dataPoint => {
      return { x: new Date(dataPoint.dateTime), y: dataPoint.moisture }
    })
    const options = {
      backgroundColor: "#e6efee",
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
        type: "splineArea",
        name: this.props.plantToGraph.plantName,
        showInLegend: false,
        dataPoints: graphData
        
      }]
    }
    
    if (!options || !this.state.selectedPlantData) {
      return <>Loading...</>
    } else { 
      
      return (
        <React.Fragment>
          <div className="plantCard">
            <CanvasJSChart options={options} />
          </div>
        </React.Fragment>
      );
    }
  }
}

PlantGraph.propTypes = {
  plantToGraph: PropTypes.func
}

export default PlantGraph;