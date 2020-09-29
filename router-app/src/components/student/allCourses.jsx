import React, { Component } from "react";
import http from "../../services/httpService";
import NavBar2 from "../navbars/navbar2";

class AllCourses extends Component {
  state = { data: [] };
  async componentDidMount() {
    let param = "";
    param = this.props.result.name;
    const res = await http.get("http://localhost:2450/getCourses");

    const data = res.data.filter((p) => p.students.find((a) => a === param));
    console.log(data);
    this.setState({ data });
    // this.handleData(data);
  }
  // handleData = (data) => {
  //   const result = data.map((p) => {
  //     p.student.map();
  //   });
  // };
  render() {
    return (
      <div>
        <h3 className="mt-3">Courses Assigned</h3>
        <table className="table">
          <thead className="alert-secondary">
            <tr>
              <th>Course Id</th>
              <th>Course Name</th>
              <th>Course Code</th>
              <th>Description</th>
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

export default AllCourses;
