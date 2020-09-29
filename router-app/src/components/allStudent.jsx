import React, { Component } from "react";
import NavBar1 from "./navbars/navBar1";
import http from "../services/httpService";
import queryString from "query-string";
import Checbox from "./common/checkBox";

const api = "http://localhost:2450/getStudents?page=1";
const api1 = "http://localhost:2450/getCourses";

class Allstudent extends Component {
  state = {
    data: {},
    courses: [],
    filter: [],
    course: [],
  };
  async componentDidMount() {
    const result = await http.get(api);
    const res = await http.get(api1);
    const courses = res.data.map((x) => x.name);

    const data = result.data;
    console.log(data);
    this.setState({ data, courses });
  }

  async componentDidUpdate(prevProps, prevState) {
    let params = "";
    let { page, course } = queryString.parse(this.props.location.search);
    params = this.addToParams(params, "page", page);
    params = this.addToParams(params, "course", course);
    if (this.props != prevProps) {
      const res = await http.get("http://localhost:2450/getStudents" + params);

      const data = res.data;
      console.log(data);
      this.setState({ data });
    }
  }

  handlePageChange = (p) => {
    let { page } = queryString.parse(this.props.location.search);
    let currentPage = page ? +page : 1;
    currentPage = currentPage + p;
    this.callUrl("", currentPage);
  };
  callUrl = (params, page, course) => {
    let path = "/allstudent";
    params = this.addToParams(params, "page", page);
    params = this.addToParams(params, "course", course);
    this.props.history.push({ pathname: path, search: params });
  };

  addToParams = (params, newparaName, newparaValue) => {
    if (newparaValue) {
      params = params ? params + "&" : params + "?";
      params = params + newparaName + "=" + newparaValue;
    }
    return params;
  };
  handleOnchange = (courseCheckbox) => {
    let filteredNames = courseCheckbox.filter((n1) => n1.selected);
    let arrayNames = filteredNames.map((n1) => n1.name);
    let courses = arrayNames.join(",");
    this.callUrl("", 1, courses);
  };

  makeCbStructure(names, players) {
    let temp = names.map((n1) => ({
      name: n1,
      selected: false,
    }));

    let cnames = players.split(",");
    for (let i = 0; i < cnames.length; i++) {
      let obj = temp.find((n1) => n1.name === cnames[i]);
      if (obj) obj.selected = true;
    }
    return temp;
  }

  render() {
    let { page, course } = queryString.parse(this.props.location.search);
    page = page ? +page : 1;
    course = course ? course : "";
    const { data, courses, filter } = this.state;
    let courseCheckbox = this.makeCbStructure(courses, course);
    console.log(courseCheckbox);
    return (
      <div>
        <div className="row mt-3">
          <div className="col-3 ">
            <Checbox
              courseCheckbox={courseCheckbox}
              change={this.handleOnchange}
            />
          </div>
          <div className="col">
            <h3>All Student</h3>

            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Date of Birth</th>
                  <th>About</th>
                  <th>Courses</th>
                </tr>
              </thead>
              <tbody className="bg-warning">
                {data.items &&
                  data.items.map((p) => (
                    <tr key={p.id}>
                      <td>{p.id}</td>
                      <td>{p.name}</td>
                      <td>{p.dob}</td>
                      <td>{p.about}</td>
                      <td>
                        {p.courses.map((a) => (
                          <div>{a}</div>
                        ))}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {data.page > 1 && (
              <div className="row">
                <div className="col-6 d-inline-flex justify-content-start ">
                  <div className="page-item  ">
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => this.handlePageChange(-1)}
                    >
                      Prev
                    </button>
                  </div>
                </div>
                <div className="col-6 d-inline-flex justify-content-end ">
                  <div className="page-item">
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => this.handlePageChange(1)}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}
            {data.page === 1 && (
              <div className="pagination d-flex justify-content-end ">
                <div className="page-item">
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => this.handlePageChange(1)}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Allstudent;
