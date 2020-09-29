import React, { Component } from "react";
import NavBar3 from "../navbars/navbar3";
import ScheduleClass from "./scheduleClass";
import http from "../../services/httpService";

const api = "http://localhost:2450/getFacultyClass/";
class AllScheduledClass extends Component {
  state = { data: [], view: 0, course: {} };
  async componentDidMount() {
    let param = "";
    param = this.props.result.name;
    const result = await http.get(api + param);

    const data = result.data;
    console.log(data);
    this.setState({ data });
  }
  handleView = (p) => {
    this.setState({ course: p, view: 1 });
  };
  render() {
    return (
      <div>
        {this.state.view === 0 ? (
          <div className="mt-3">
            <h3>All Scheduled Class</h3>
            <table className="table">
              <thead className="alert-Secondary">
                <tr>
                  <th>Course Name</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Topic</th>

                  <th></th>
                </tr>
              </thead>
              <tbody className="alert-warning">
                {this.state.data &&
                  this.state.data.map((p) => (
                    <tr key={p.courseId}>
                      <td>{p.course}</td>
                      <td>{p.time}</td>
                      <td>{p.endTime}</td>
                      <td>{p.topic}</td>

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
            <button className="btn btn-primary btn-sm">Add New Class</button>
          </div>
        ) : (
          <ScheduleClass course={this.state.course} />
        )}
      </div>
    );
  }
}

export default AllScheduledClass;
