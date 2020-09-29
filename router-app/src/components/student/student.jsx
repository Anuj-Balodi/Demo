import React, { Component } from "react";
import NavBar2 from "../navbars/navbar2";

class Student extends Component {
  state = {};
  render() {
    console.log(this.props.result);
    return (
      <div>
        <h3 className="text-center text-warning mt-4">
          Welcome To Student Dashboard
        </h3>
      </div>
    );
  }
}

export default Student;
