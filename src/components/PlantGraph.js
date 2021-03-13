import React from "react";
import firebase from "./../firebase/index";
import CanvasJSReact from "./../canvasjs.react"; 

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PlantGraph extends React.Component {
  constructor() {
    super();
    this.state = {
      masterPlantList: [{moisture: 0, dateTime: "test"}]
    }
  }


  componentDidMount() {
    const doc = firebase.db.collection("hardware");
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

  myData() {
    // const dataObject = this.state.masterPlantList;
    return this.state.masterPlantList.map( dataPoint => {
      return { x: dataPoint.dateTime, y: dataPoint.moisture }
    })
  }

  render() {
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
        dataPoints: this.myData
        // [
        // {x: "0", y: 5},
        // {x: "1", y: 3},
        // {x: "2", y: 7},
        // {x: "3", y: 9},
        // {x: "4", y: 2},
        // {x: "5", y: 4},
        // {x: "6", y: 7},
        // ]
      }]
    }
    // const options = {
		// 	animationEnabled: true,
		// 	title:{
		// 		text: "Monthly Sales - 2017"
		// 	},
		// 	axisX: {
		// 		valueFormatString: "MMM"
		// 	},
		// 	axisY: {
		// 		title: "Sales (in USD)",
		// 		prefix: "$"
		// 	},
		// 	data: [{
		// 		yValueFormatString: "$#,###",
		// 		xValueFormatString: "MMMM",
		// 		type: "spline",
		// 		dataPoints: [
		// 			{ x: new Date(2017, 0), y: 25060 },
		// 			{ x: new Date(2017, 1), y: 27980 },
		// 			{ x: new Date(2017, 2), y: 42800 },
		// 			{ x: new Date(2017, 3), y: 32400 },
		// 			{ x: new Date(2017, 4), y: 35260 },
		// 			{ x: new Date(2017, 5), y: 33900 },
		// 			{ x: new Date(2017, 6), y: 40000 },
		// 			{ x: new Date(2017, 7), y: 52500 },
		// 			{ x: new Date(2017, 8), y: 32300 },
		// 			{ x: new Date(2017, 9), y: 42000 },
		// 			{ x: new Date(2017, 10), y: 37160 },
		// 			{ x: new Date(2017, 11), y: 38400 }
		// 		]
		// 	}]
		// }
    // const options = {
    //   title: {
    //     text: "Temperature in Freedom Units"
    //   },
    //   axisY: {
    //     title: "Temp Fahrenheit",
    //     minimum: -50,
    //     maximum: 145,
    //   },
    //   data: [{
    //     type: "column",
    //     dataPoints: [
    //       { label: "1", y: 50 },
    //       { label: "1", y: 50 },
    //       { label: "1", y: 50 },
    //       { label: "1", y: 50 },
    //       { label: "1", y: 50 },
    //       { label: "1", y: 50 },
    //       { label: "1", y: 50 },
    //       { label: "1", y: 50 }
    //     ]
    //   }]
    // }
    
    if (!options || !this.state.masterPlantList) {
      return <>Loading...</>
    } else { 
      
      return (
        <React.Fragment>
          {console.log(this.state.masterPlantList)}
          <CanvasJSChart options={options} />
        </React.Fragment>
      );
    }
  }
}

export default PlantGraph;