import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "place holder" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.props, "props data");
  }

  handleSubmit(event) {
    // change value upon submit
    this.setState({ value: "sorry, changed upon submit" });
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
        <span>
          value is: {this.state.value}: props: {this.props.xy}
        </span>
      </form>
    );
  }
}
export default User;
