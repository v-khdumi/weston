import { combineReducers } from "redux";
import taskReducer from "./task_reducer";

// import { reducer as notifReducer } from "redux-notifications";

const rootReducer = combineReducers({
  tasks: taskReducer
});

export default rootReducer;
