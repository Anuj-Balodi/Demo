import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import NavBar from "./navbars/navbar";
import http from "../services/httpService";

const api = "http://localhost:2450/login";
class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    // Call the server
    const { data } = this.state;
    const result = await http.post(api, data);
    console.log(result);
    this.props.handleResult(result.data);
    if (result.data.role === "student") {
      this.props.history.push("/student");
    }

    if (result.data.role === "admin") {
      this.props.history.push("/admin");
    }

    if (result.data.role === "faculty") {
      this.props.history.push("/faculty");
    }
  };

  render() {
    return (
      <div>
        <h4 className="text-center mt-2">
          <b>Login</b>
        </h4>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          <div className="text-center ">{this.renderButton("Login")}</div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
