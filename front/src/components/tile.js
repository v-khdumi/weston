import React, { Component } from "react";

export default class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tileName: "Tasks",
      tileText: " Open Tasks",
      currentlyOpenTasks: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.table(props, state);
    if (props != state) {
      return {
        currentlyOpenTasks: props.currentlyOpenTasks
      };
    } else {
      return null;
    }
  }

  render() {
    const { tileName, tileText, currentlyOpenTasks } = this.state;
    const { tasks } = this.props;
    console.log("in view", tasks);

    if (tasks.length == 0) {
      var formattedTasks = <div className="task">You have no tasks.</div>;
    } else {
      var formattedTasks = tasks.all.map(task => {
        return (
          <div className="task" key={task.id}>
            {task.title}
          </div>
        );
      });
    }
    var label = currentlyOpenTasks + tileText;

    return (
      <div className="task-list">
        <h2>{tileName}</h2>
        {formattedTasks}
      </div>
    );
  }
}
