var axios = require("axios");

export const getTasks = () => {
  return function(dispatch, getState) {
    const headers = {
      "Content-Type": "application/json"
    };

    axios
      .get("http://localhost:3000/tasks", headers)
      .then(function(response) {
        console.log(response);
        var tasks = response.data;
        dispatch(updateTasks(tasks));
      })
      .catch(function(error) {
        console.error(error);
      });
  };
};

export const updateTasks = tasks => {
  return {
    type: "UPDATE_TASKS",
    payload: {
      tasks: tasks
    }
  };
};
