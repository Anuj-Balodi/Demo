import React, { Component } from "react";

import Joi from "joi-browser";
import NavBar2 from "../navbars/navbar2";

class StudentDetails extends Component {
  state = {
    data: { gender: "", dob: "", aboutMyself: "" },
    errors: {},
    date: [],
    month: [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    year: [],
  };
  componentDidMount() {
    let date = [...this.state.date];
    for (let i = 1; i <= 31; i++) {
      date.push(i);
    }

    let year = [...this.state.year];
    for (let i = 1995; i <= 2020; i++) {
      year.push(i);
    }

    this.setState({ date, year });
    console.log(date, year);
  }

  schema = {
    gender: Joi.string().required().label("Gender"),
    // dob: Joi.date().required().label("Date Of Birth"),
    aboutMyself: Joi.string().required(),
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  // validateProperty = ({ name, value }) => {
  //   const obj = { [name]: value };
  //   const schema = { [name]: this.schema[name] };
  //   const { error } = Joi.validate(obj, schema);
  //   return error ? error.details[0].message : null;
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    let dob = this.state.date + "-" + this.state.month + "-" + this.state.year;
    const data = { ...this.state.data };
    data.dob = dob;

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log(dob);
  };

  handleChange = (e) => {
    // const errors = { ...this.state.errors };
    // const errorMessage = this.validateProperty(input);
    // if (errorMessage) errors[input.name] = errorMessage;
    // else delete errors[input.name];

    // const data = { ...this.state.data };
    // data[input.name] = input.value;

    // this.setState({ data, errors });

    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;

    let dob = this.state.date + "-" + this.state.month + "-" + this.state.year;
    // const data = { ...this.state.data };
    data.dob = dob;

    this.setState({ data });
    console.log(data);
  };
  render() {
    return (
      <div>
        <div className="ml-5 mt-3">
          <h3 className="">
            <b>Student Details</b>
          </h3>
          <form>
            <div className="form-check-inline ">
              <div className="form-label  ">
                <b>
                  Gender<span className="text-danger">*</span>
                </b>
              </div>
              <div className="form-check-inline ">
                <div className="form-Check form-check-inline  ml-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="Male"
                    value="Male"
                    onChange={this.handleChange}
                    checked={this.state.data.gender === "Male"}
                  ></input>
                  <label class="form-check-label" for="Male">
                    Male
                  </label>
                </div>
                <div className="form-Check form-check-inline ml-5">
                  <input
                    className="form-check-input "
                    type="radio"
                    name="gender"
                    id="Female"
                    value="Female"
                    onChange={this.handleChange}
                    checked={this.state.data.gender === "Female"}
                  ></input>
                  <label class="form-check-label" for="Female">
                    Female
                  </label>
                </div>
              </div>
              {/* {this.state.errors && (
          <div className="alert alert-danger">{this.state.errors}</div>
        )} */}
            </div>
            <div className="form-label mt-4 ">
              <label className="my-1 mr-2" for="inlineFormCustomSelect">
                <b>
                  Date Of Birth<span className="text-danger">*</span>
                </b>
              </label>
              <br></br>

              <div className="form-check-inline">
                <select
                  value={this.state.data}
                  onChange={this.handleChange}
                  name="Date"
                  className="custom-select mr-sm-2 form-check-inline"
                  id="inlineFormCustomSelect"
                >
                  <option selected>Select Date</option>
                  {this.state.date.map((b) => (
                    <option value={b}>{b}</option>
                  ))}
                </select>
                <select
                  value={this.state.month}
                  onChange={this.handleChange}
                  name="Month"
                  className="custom-select mr-sm-2 form-check-inline"
                  id="inlineFormCustomSelect"
                >
                  <option selected>Select Month</option>
                  {this.state.month.map((b) => (
                    <option value={b}>{b}</option>
                  ))}
                </select>
                <select
                  value={this.state.year}
                  onChange={this.handleChange}
                  name="Year"
                  className="custom-select mr-sm-2 form-check-inline"
                  id="inlineFormCustomSelect"
                >
                  <option selected>Select Year</option>
                  {this.state.year.map((b) => (
                    <option value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label for="validationTextarea">About Myself </label>
              <textarea
                value={this.state.data.aboutMyself}
                onChange={this.handleChange}
                name="aboutMyself"
                className="form-control "
                id="validationTextarea"
                required
              ></textarea>
            </div>
            <button
              disabled={this.validate}
              className="btn btn-primary btn-sm mt-2"
            >
              Add Details
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default StudentDetails;
