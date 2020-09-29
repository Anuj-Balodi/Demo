import React, { Component } from "react";

import http from "../services/httpService";

import NavBar1 from "./navbars/navBar1";
import Editclass from "./common/editClass";

const api = "http://localhost:2450/getCourses";
const api1 = "http://localhost:2450/getFacultyNames";
class Assignclasses extends Component {
  state = {
    data: [],
    faculties: [],
    view: 0,
    course: {},
  };

  async componentDidMount() {
    const result = await http.get(api);
    const res = await http.get(api1);
    const faculties = res.data;

    const data = result.data;
    console.log(data);
    this.setState({ data, faculties });
  }
  handleView = (p) => {
    this.setState({ course: p, view: 1 });
  };
  render() {
    return (
      <div>
        {this.state.view === 0 ? (
          <div className="mt-3">
            <h3>Add faculties to a course</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>CourseId</th>
                  <th>Name</th>
                  <th>Course Code</th>
                  <th>Description</th>
                  <th>Faculty</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="bg-warning">
                {this.state.data &&
                  this.state.data.map((p) => (
                    <tr key={p.courseId}>
                      <td>{p.courseId}</td>
                      <td>{p.name}</td>
                      <td>{p.code}</td>
                      <td>{p.description}</td>
                      <td>
                        {p.faculty.map((a) => (
                          <div>{a}</div>
                        ))}
                      </td>

                      <td>
                        <button
                          onClick={() => this.handleView(p)}
                          className="btn btn-secondary btn-sm"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <Editclass
            faculties={this.state.faculties}
            course={this.state.course}
          />
        )}
      </div>
    );
  }
}
export default Assignclasses;
