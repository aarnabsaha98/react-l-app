import MSG from "./Message";
import ListGroup from "./components/listGroup";
import Alert from "./components/alert";
import Buttons from "./components/Buttons";
import { useState } from "react";
// import { Fragment } from 'react';

function App() {
  const Items = [
    "Postgres",
    "JavaScript",
    "React",
    "MongoDB",
    "Express",
    "Node-JS",
  ];

  const Heading = "Full-Statck";
  const alertMessage = <p> Please <b> Learn !! </b></p>

  const handleSelectitem = (item: string) => {
    console.log(item);
  };


  const ButtonName = 'Click Me'
  // const color = 'danger';/

  const [alertVisible , setAlertVisibility ] = useState(false);


  const clickMessage = (showMessage : string ) =>{
    showMessage = 'click message hey ! you there '
    console.log(showMessage);
    setAlertVisibility(true)
  }
const dissMissAlert = ()=>{
  setAlertVisibility(false) 
}


  return (
    <>
      {/* 
        we are established the parent child relationship
         inside the div 

        Paasing the values from parent to child components

        Passing an event from parent to child components
      */}

      <div>
        {" "}
        <MSG />{" "}
      </div>

      <div>
        {" "}
        <ListGroup
          items={Items}
          heading={Heading}
          onNotifyParentComponent={handleSelectitem}
        />{" "}
      </div>

      <div>
        {" "}
        {alertVisible && <Alert alertMsg={alertMessage}  onRemoveAlert = {dissMissAlert}/> } 
        {" "}
      </div>
      <div>
        {" "}
        <Buttons  
          children = {ButtonName} 
          onClickMessage = {clickMessage}
          // color = {color}
        />{" "}
      </div>
    </>
  );
}

export default App;
