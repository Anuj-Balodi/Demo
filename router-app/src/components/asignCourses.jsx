import React, { Component } from "react";

import http from "../services/httpService";
import Editcourse from "./common/editCourse";
import NavBar1 from "./navbars/navBar1";

const api = "http://localhost:2450/getCourses";
const api1 = "http://localhost:2450/getStudentNames";
class Assigncourses extends Component {
  state = {
    data: [],
    students: [],
    view: 0,
    course: {},
  };

  async componentDidMount() {
    const result = await http.get(api);
    const res = await http.get(api1);
    const students = res.data;

    const data = result.data;
    console.log(data);
    this.setState({ data, students });
  }
  handleView = (p) => {
    this.setState({ course: p, view: 1 });
  };
  render() {
    return (
      <div>
        {this.state.view === 0 ? (
          <div className="mt-3">
            <h3>Add students to a course</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>CourseId</th>
                  <th>Name</th>
                  <th>Course Code</th>
                  <th>Description</th>
                  <th>Student</th>
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
                        {p.students.map((a) => (
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
          <Editcourse
            students={this.state.students}
            course={this.state.course}
          />
        )}
      </div>
    );
  }
}
export default Assigncourses;
