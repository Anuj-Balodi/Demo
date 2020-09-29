import React, { Component } from "react";

class Logout extends Component {
  componentDidMount() {
    //    localStorage.removeItem('')
    // window.location = "/login";
    this.props.handleResult({});
    this.props.history.replace("/login");
  }
  render() {
    return null;
  }
}

export default Logout;
