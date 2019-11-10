// import {
//   UPDATE_SERVICES,
//   FILTER_SERVICES
// } from "../../constants/user_service_package_constants";

const initialState = {
  all: [],
  selected: {},
  newTask: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_TASKS":
      const tasks = [...action.payload.tasks];
      console.table("reducer: ", tasks);

      return {
        ...state,
        all: tasks
      };

    default:
      return state;
  }
}
