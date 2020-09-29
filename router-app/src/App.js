import React, { Component } from "react";
import NavBar from "./components/navbars/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginForm from "./components/logIn";
import Admin1 from "./components/admin1";
import Registration from "./components/registration";
import Allstudent from "./components/allStudent";
import Allfaculty from "./components/allfaculty";
import Assigncourses from "./components/asignCourses";
import Assignclasses from "./components/assignClasses";
import AllClasses from "./components/student/allClasses";
import AllCourses from "./components/student/allCourses";
import StudentDetails from "./components/student/studentDetails";
import Student from "./components/student/student";
import Faculty from "./components/faculty/faculty";
import ScheduleClass from "./components/faculty/scheduleClass";
import CoursesAssigned from "./components/faculty/coursesAssigned";
import AllScheduledClass from "./components/faculty/allScheduledClass";
import NavBar1 from "./components/navbars/navBar1";
import Logout from "./components/logout";

class App extends Component {
  state = { result: {} };
  handleResult = (result) => {
    this.setState({ result });
  };
  render() {
    return (
      <div>
        <NavBar1 result={this.state.result} />
        <Switch>
          <Route
            path="/login"
            render={(props) => (
              <LoginForm handleResult={this.handleResult} {...props} />
            )}
          />
          <Route
            path="/admin"
            render={(props) => <Admin1 result={this.state.result} {...props} />}
          />
          <Route
            path="/student"
            render={(props) => (
              <Student result={this.state.result} {...props} />
            )}
          />
          <Route
            path="/faculty"
            render={(props) => (
              <Faculty result={this.state.result} {...props} />
            )}
          />
          <Route
            path="/registration"
            render={(props) => (
              <Registration result={this.state.result} {...props} />
            )}
          />
          <Route
            path="/allstudent"
            render={(props) => (
              <Allstudent result={this.state.result} {...props} />
            )}
          />
          <Route
            path="/allfaculty"
            render={(props) => (
              <Allfaculty result={this.state.result} {...props} />
            )}
          />
          <Route
            path="/asigncourses"
            render={(props) => (
              <Assigncourses result={this.state.result} {...props} />
            )}
          />
          <Route
            path="/assignclasses"
            render={(props) => (
              <Assignclasses result={this.state.result} {...props} />
            )}
          />
          <Route
            path="/allclasses"
            render={(props) => (
              <AllClasses result={this.state.result} {...props} />
            )}
          />
          <Route
            path="/allcourses"
            render={(props) => (
              <AllCourses result={this.state.result} {...props} />
            )}
          />
          <Route
            path="/studentdetails"
            render={(props) => (
              <StudentDetails result={this.state.result} {...props} />
            )}
          />
          <Route
            path="/scheduleclass"
            render={(props) => (
              <ScheduleClass result={this.state.result} {...props} />
            )}
          />
          <Route
            path="/classesAssigned"
            render={(props) => (
              <CoursesAssigned result={this.state.result} {...props} />
            )}
          />
          <Route
            path="/allScheduledClass"
            render={(props) => (
              <AllScheduledClass result={this.state.result} {...props} />
            )}
          />
          <Route
            path="/logout"
            render={(props) => (
              <Logout handleResult={this.handleResult} {...props} />
            )}
          />
          <Redirect from="/" exact to="/login" />
        </Switch>
      </div>
    );
  }
}

export default App;
