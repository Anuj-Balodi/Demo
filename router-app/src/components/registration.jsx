import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import NavBar1 from "./navbars/navBar1";
import http from "../services/httpService";

const api = "http://localhost:2450/register";

class Registration extends Form {
  state = {
    data: {
      name: "",
      newPassword: "",
      currentPassword: "",
      newEmail: "",
      Role: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    newPassword: Joi.string().required().label("Password"),
    currentPassword: Joi.string().required().label("Current Password"),
    newEmail: Joi.string().required().label("Email"),
    Role: Joi.string().required().label("Role"),
  };

  doSubmit = async () => {
    // Call the server

    const response = await http.post(api, this.state.data);

    if (response && response.status === 200) {
      alert("User created successfully");
      this.props.history.replace("/admin");
    }

    if (response && response.status === 400) {
      alert("User Already Exist");
    }
  };
  render() {
    return (
      <div>
        <h3 className="text-center mt-3"> Register</h3>{" "}
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("newPassword", "Password", "password")}
          {this.renderInput("currentPassword", "Current Password", "password")}
          {this.renderInput("newEmail", "Email")}
          {this.renderRadio("Role")}
          <div className="text-center ">{this.renderButton("Register")}</div>
          {/* {this.renderSelect("email", "Email")} */}
        </form>
      </div>
    );
  }
}

export default Registration;
