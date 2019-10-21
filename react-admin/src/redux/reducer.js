import { combineReducers } from "redux";
import { 
  DECREEMENT,
  INCREEMENT
 } from "./action-types";
 const initCount = 1
 function count(state=initCount,action) {
   console.log('cout()',this.state,action)
  switch (action.type) {
    case INCREEMENT:
      return state + action.data
      case DECREEMENT:
      return state - action.data
    default:
      return state;
  }
  }