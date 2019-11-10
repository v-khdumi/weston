import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index.js";
import Index from "./components/Index";

export default class IndexWrapper extends Component {
  configureStore(initialState) {
    console.log("initial state => ", initialState);
    return applyMiddleware(thunk)(createStore)(rootReducer, initialState);
  }

  render() {
    console.log("props:", this.props);
    const store = this.configureStore(this.props);
    return (
      <Provider store={store}>
        <Index {...this.props} />
      </Provider>
    );
  }
}
