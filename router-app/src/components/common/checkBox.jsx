import React, { Component } from "react";

class Checbox extends Component {
  state = {};
  handleChange = (e) => {
    const { currentTarget: input } = e;
    let { courseCheckbox, change } = this.props;
    let cb = courseCheckbox.find((n1) => n1.name === input.name);
    if (cb) {
      cb.selected = input.checked;
    }
    change(courseCheckbox);
  };
  render() {
    let { courseCheckbox } = this.props;
    return (
      <ul>
        <div className="border">
          <b>Option</b>
        </div>
        {courseCheckbox.map((p) => (
          <li key={p.name} className="form-check border list-group-item-action">
            <input
              className="form-check-input"
              type="checkbox"
              id={p.name}
              value={p.name}
              onChange={this.handleChange}
              name={p.name}
            ></input>
            <label className="form-check-label" htmlFor={p.name}>
              {p.name}
            </label>
          </li>
        ))}
      </ul>
    );
  }
}

export default Checbox;
