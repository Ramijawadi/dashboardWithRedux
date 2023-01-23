import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestUsers } from "./components/actions/action";
import "./App.css";


import { AiOutlinePlusCircle } from 'react-icons/ai';
import Card from "./components/card";
const App = () => {
  const usersData = useSelector((state) => state.user.usersData);
  const isLoading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("hello app")
    dispatch(requestUsers());


  }, []);

  return (
    <>
      <div className="head">
        <p>Dashboard</p>
        <div style={{display : "flex" , justifyContent:"space-between" , alignItem:"center"}}>
        <button className="btnPub" ><AiOutlinePlusCircle style={{fontSize:"15px"}}/>Publier une annonce</button> 
        </div>
      </div>
      <div className="container">

       <p id="title">Candidats</p>
        {isLoading && <div className="loading">Data loading...</div>}
        {usersData && usersData.map((user, id) =>

          <Card user={user} key={id} />
        )}

      </div>

    </>
  );

};

export default App;
