import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import http from "../../services/httpService";
import Faculty from "../faculty/faculty";

const api = "http://localhost:2450/putCourse";

class Editclass extends Form {
  state = {
    data: this.props.course,
    errors: {},
  };
  schema = {
    name: Joi.string().required().label("Name"),
    code: Joi.string().required().label("Code"),
    description: Joi.string().required().label("Description"),
    // Faculty: Joi.array().item().label("Student"),
  };
  // componentDidMount() {
  //   const data = this.props.course;
  //   this.setState({ data });
  // }
  handleSubmit = async () => {
    // const course = this.props.course;
    const { data } = this.state;
    const result = await http.put(api, data);
    console.log(result);
  };
  handleChange = (e) => {
    const { currentTarget: input } = e;
    const data = { ...this.state.data };

    const cb = data.faculty.findIndex((n1) => n1 === input.name);
    if (cb >= 0 && !input.checked) {
      data.faculty.splice(cb, 1);
    } else if (cb < 0 && input.checked) {
      data.faculty.push(input.value);
    }
    console.log(data.faculty);
    this.setState({ data });
  };
  render() {
    const { faculties } = this.props;
    // const { Faculty } = this.state.data;
    // console.log(Faculty);
    return (
      <div>
        <h4 className="text-center mt-2">
          <b>Edit the Course</b>
        </h4>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("code", "Code")}
          {this.renderInput("description", "Description")}
          <ul className="d-flex">
            <div className="col-sm-4 col-form-label col-form-label-sm text-right">
              Students
            </div>
            <span className="text-danger">*</span>
            <div className="col-sm-5">
              {faculties.map((p) => (
                <li key={p} className="form-check list-group-item-action">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={p}
                    value={p}
                    onChange={this.handleChange}
                    name={p}
                    checked={this.state.data.faculty.find((a) => a === p)}
                  ></input>
                  <label className="form-check-label" htmlFor={p}>
                    {p}
                  </label>
                </li>
              ))}
            </div>
          </ul>
          <div className="text-center ">
            {" "}
            <button className="btn btn-primary btn-sm">Update</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Editclass;
