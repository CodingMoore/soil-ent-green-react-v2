import React from "react";
import firebase from "./../firebase/index";

class PlantControl extends React.Component {
  constructor() {
    super();
    this.state = {
      masterList: null
    }
  }

  //ONE TIME GET REQUEST!!! (OUTSIDE of Render() function.)
  // componentDidMount() {
  //   firebase.db.collection("hardware").get()
  //     .then(querySnapshot => {
  //       const result = querySnapshot.docs.map( doc => {
  //         return {...doc.data(), id: doc.id};
  //       })
  //       this.setState({masterList: result});
  //     })
  //     .catch(err => {
  //       console.log(err.message);
  //     })
  // };
  ////////////////////////////

  //REALTIME LISTENER!!! (OUTSIDE of Render() function)
  componentDidMount() {
    const doc = firebase.db.collection("hardware");
    doc.onSnapshot(docSnapshot => {
      // console.log(`received doc snapshot: ${docSnapshot}`);
      const result = docSnapshot.docs.map( doc => {
      return {...doc.data(), id: doc.id};
      })
      this.setState({masterList: result});
    }, err => {
      console.log(`Encountered error: ${err}`);
    });
  }
  ////////////////////////////////////////////////


  render() {
    
    // ADD DATA  (infinite loop inside render)
    // firebase.db.collection("testCollection").add({title: "first todo", description: "new todo" })
    // .then(documentReference => {
    //   console.log("document reference ID", documentReference.id)
    // })
    // .catch(error => {
    //   console.log(error.message)
    // });

    // GET DATA (infinite loop inside render)
    // firebase.db.collection("testCollection").get()
    // .then(querySnapshot => {
    //   querySnapshot.docs.map( doc => {
    //     console.log(doc.id, " => ", doc.data());
    //   })
    // })
    // .catch(err => {
    //   console.log(err.message)
    // })
    
    return (
    
      console.log(this.state.masterList),
      <h1>Placeholder</h1>
    
    );
  }

}

export default PlantControl