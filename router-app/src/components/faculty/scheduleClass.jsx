import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import NavBar3 from "../navbars/navbar3";
import http from "../../services/httpService";
import Posts from "../admin/posts";

const api = "http://localhost:2450/postClass";

class ScheduleClass extends Form {
  state = {
    data: { course: "", time: "", endTime: "", topic: "" },
    errors: {},
    courses: [],
  };
  async componentDidMount() {
    if (this.props.course) {
      const data = this.props.course;
      this.setState({ data });
    }
    const result = await http.get("http://localhost:2450/getCourses");
    const courses = result.data.map((x) => x.name);
    this.setState({ courses });
  }

  schema = {
    course: Joi.string().required().label("Course"),
    time: Joi.string().label("Password"),
    endTime: Joi.string().label("Current Password"),
    topic: Joi.string().required().label("Topic"),
  };

  doSubmit = async () => {
    if (this.props.course) {
      let param = "";
      param = "/" + this.props.course.classId;
      const result = await http.put(api + param, this.state.data);
      console.log(result);
      this.props.history.push("/allScheduledClass");
    } else {
      const result = await http.post(api, this.state.data);
      console.log(result);
      alert("Class Uploaded: Details :: " + { result });
      this.props.history.push("/allScheduledClass");
    }
  };
  render() {
    return (
      <div>
        <h3 className="text-center"> Schedule a class</h3>{" "}
        <form onSubmit={this.handleSubmit}>
          <div
            style={{
              maxWidth: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {this.renderSelect("course", "Course", this.state.courses)}
          </div>
          {this.renderInput("time", "Time", "time")}
          {this.renderInput("endTime", "End Time", "time")}
          {this.renderInput("Enter class topic", "Topic")}
          <div className="text-center ">{this.renderButton("Schedule")}</div>
          {/* {this.renderSelect("email", "Email")} */}
        </form>
      </div>
    );
  }
}

export default ScheduleClass;
