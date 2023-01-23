import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestUsers } from "./components/actions/action";
import "./App.css";

import Card from "./components/card";
const App = () => {
  const  usersData  = useSelector((state) => state.user.usersData);
  const isLoading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("hello app")
    dispatch(requestUsers());

  
  },[]);

  return (
<>

    <p>Dashboard</p>
    <div className="container">


      {isLoading && <div className="loading">Data loading...</div>}
      {usersData && usersData.map((user , id) =>
          
      <Card user={user}  key={id} /> 
      )}

      </div>
    
      </>
  );
 
};

export default App;
