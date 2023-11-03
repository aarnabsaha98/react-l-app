// import { Fragment } from "react";
// import MouseEvent from 'React.MouseEvent';
import { useState } from "react";

// Just like Typescript we can use pass parameters and declare the parameters!!

interface Props {
  items : string[];
  heading : string;
  // TODO: acceptany event from parent component we should use 
  // "on" as prefix then write the function "Signature"
  onNotifyParentComponent : (item :string) => void
}



function ListGroup({items , heading , onNotifyParentComponent} :Props) {

  // items = [];

  // const getMessage = () =>{
  //   return items.length == 0 ? <h1> No Items Found !!! </h1>  : null
  // }

  // const selectedIndex = 0;

  // const handleClick = (event : MouseEvent ) =>{
  //             // console.log(' items Name ' , item);
  //             // console.log(' items Index ' , index);
  //             console.log('event :' , event);
  //           }


  // Hooks :: are independent to each compopent and itself..
  const [currentState , stateUpdater]  = useState(0);


 {/*as we can see that repeating code is not a good practise!!! */}

  // if(items.length == 0){
  //   return <>
  //     <h1>Let's Learn , React !!</h1>
  //     <h1> No Items Found !!! </h1> 

  //   </>
  // }
  

  return (
    // we can not return multiple HTML tags!!!
    // to solve this we can use Fragment tag OR enclosing tags!!!

    <>
      <h1>Let's Learn , {heading} !!</h1>

      {
        // getMessage()

        //  true && 'arnab' ='arnab'
        // false && 'arnab' = false
        //  true && 1  = 1
        // false && 1 = false
        items.length == 0 && <p> No Items Found !! </p> 
      }

      <ul className="list-group">
       {/* <li className="list-group-item">OMG!</li>
        <li className="list-group-item">WOW!!</li>
        <li className="list-group-item"> Fantastic!!! </li>
        <li className="list-group-item">JS</li>
        <li className="list-group-item">{seletedIndex === index ? "list-group-item active" : "list-group-item"}</li>*/}
      {
        items.map((item :string, index) => 
          (  
        
           <li  className = { index === currentState ?  "list-group-item active" :  "list-group-item"}  key={item}

            // onClick = {handleClick}
            onClick = {()=>{
              // selectedIndex == index
              stateUpdater(index)
              console.log('index :' + index);
               console.log('currentState :' + currentState);
               onNotifyParentComponent(item);
            }}
            > {item} </li>   )
        )
      }

      </ul>
    </>
  );
}

export default ListGroup;
