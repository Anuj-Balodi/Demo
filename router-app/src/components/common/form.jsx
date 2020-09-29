import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./inbox";
import Select from "./select";
import Faculty from "../faculty/faculty";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary ">
        {label}
      </button>
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  renderRadio(label) {
    const { data, errors } = this.state;

    return (
      <div className="form-group text-right row">
        <label
          htmlFor={label}
          className="col-sm-4 col-form-label col-form-label-sm"
        >
          {label}
          <span className="text-danger">*</span>
        </label>

        <div className="col-sm-1">
          <div className="form-Check ">
            <input
              className="form-check-input"
              type="radio"
              name={label}
              id="Student"
              value="Student"
              onChange={this.handleChange}
              checked={data[label] === "Student"}
            ></input>
            <label className="form-check-label" htmlFor="Student">
              Student
            </label>
          </div>
          <div className="form-Check">
            <input
              className="form-check-input"
              type="radio"
              name={label}
              id="Faculty"
              value="Faculty"
              onChange={this.handleChange}
              checked={data[label] === "Faculty"}
            ></input>
            <label className="form-check-label" htmlFor="Personal">
              Faculty
            </label>
          </div>
          {errors[label] && (
            <div className="alert alert-danger">{errors[label]}</div>
          )}
        </div>
      </div>
    );
  }
}

export default Form;
