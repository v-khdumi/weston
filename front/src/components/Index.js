import React, { Component } from "react";
import Tile from "./tile";
import { connect } from "react-redux";

import { getTasks } from "../actions/tasks.js";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Josh",
      openTasks: 2,
      tasks: []
    };
  }

  componentDidMount() {
    this.props.getTasks();
  }

  static getDerivedStateFromProps(props, state) {
    console.log("deriving", state, props);
    if (props.tasks !== state.tasks) {
      return {
        tasks: props.tasks
      };
    }
    return null;
  }

  render() {
    console.log("index: ", this.state.tasks);
    return (
      <div className="index">
        <h1>Hey, {this.state.name}!</h1>

        <div className="tiles">
          <Tile tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(props) {
  return {
    tasks: props.tasks
  };
}

export default connect(
  mapStateToProps,
  {
    getTasks
  }
)(Index);
