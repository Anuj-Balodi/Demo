import React, { Component } from "react";
import NavBar3 from "../navbars/navbar3";
import http from "../../services/httpService";

class CoursesAssigned extends Component {
  state = { data: [] };
  async componentDidMount() {
    let param = "";
    param = this.props.result.name;
    const res = await http.get(
      "http://localhost:2450/getFacultyCourse/" + param
    );

    const data = res.data;
    this.setState({ data });
  }
  render() {
    return (
      <div>
        <h3>Courses Assigned</h3>
        <table className="table">
          <thead className="alert-secondary">
            <tr>
              <th>Course Id</th>
              <th>Course Name</th>
              <th>Course Code</th>
              <th>Discription</th>
            </tr>
          </thead>
          <tbody className="alert-success">
            {this.state.data &&
              this.state.data.map((p) => (
                <tr key={p.courseId}>
                  <td>{p.courseId}</td>
                  <td>{p.name}</td>
                  <td>{p.code}</td>
                  <td>{p.description}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CoursesAssigned;
