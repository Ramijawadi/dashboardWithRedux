import axios from "axios";
import USER from "../store/constant";
import data from '../../data/data.json'
export const requestUsers =  () => {
  //console.log(data)

      
  return async dispatch => {
    try {
  
  
      dispatch({
        type: USER.LOAD_SUCCESS,
        payload:{
         users :  data,
         isError : false
        } 
        
      });
    } catch (e) {
      console.log(e)
      dispatch({
        type: USER.LOAD_FAILURE,
        payload:{
          users : [],
          isError : true
        } 
      });
    }


  };

};