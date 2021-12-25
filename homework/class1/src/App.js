import React from "react";
import { Hotel } from "./Hotel";
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div id="App">
        <h2>Hotel's available rooms</h2>
        <Hotel capacity={1} vacancy="King-Room" availability={true}/>
        <Hotel capacity={0} vacancy="Presidential Room" availability={false}/>
        <Hotel capacity={100} vacancy="Standard Room" availability={true}/>
        </div>
    )
  }
}

export {App}