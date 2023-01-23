import React  from "react";
import { TbUsers } from 'react-icons/tb';
import "../App.css";

const Card = ( props ) => {


  return (
    <>



      <div className="container">
    
        <span >
       <div className="fixPos">
      <TbUsers id="icon" />
      </div>
      <h1>{props.user.num}</h1>
      
          <h3>{props.user.name}</h3>
       
          <button className="btn" >Voir les  candidatures </button>
         
          </span>
        

      
      </div>
    </>
  )



};

export default Card;
