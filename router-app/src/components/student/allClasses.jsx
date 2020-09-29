import React, { Component } from "react";
import http from "../../services/httpService";
import NavBar2 from "../navbars/navbar2";

class AllClasses extends Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    let param = "";
    param = this.props.result.name;
    const res = await http.get(
      "http://localhost:2450/getStudentClass/" + param
    );

    const data = res.data;
    this.setState({ data });
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <h3 className="mt-3">All Scheduled Classes</h3>
        <table className="table">
          <thead className="alert-secondary">
            <tr>
              <th>Course Name</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Faculty Name</th>
              <th>Topic</th>
            </tr>
          </thead>
          <tbody className="alert-warning">
            {this.state.data &&
              this.state.data.map((p) => (
                <tr key={p.classId}>
                  <td>{p.course}</td>
                  <td>{p.time}</td>
                  <td>{p.endTime}</td>
                  <td>{p.facultyName}</td>
                  <td>{p.topic}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AllClasses;
