import React, { Component } from "react";

class ContactInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "type name",
      email: "type Email",
      phone: "555 - 5555"
    };

    // other fields
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } // End constructor

  handleChange(event) {
    console.log(event.target.value, "::event target value::");
    console.log(this.props, "::props output::");

    if (event.target.name === "name") {
      this.setState({ name: event.target.value });
      console.log(event.target.name, "check teh values of event.target.name");
    }
    if (event.target.name === "email") {
      this.setState({ email: event.target.value });
      //this.setState({ value: event.target.value });
    }

    if (event.target.name === "phone") {
      this.setState({ phone: event.target.value });
      //this.setState({ value: event.target.value });
    }
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div classname="input-group">
        <p className="text-justify"> name is: {this.state.name} </p>
        <p> email is: {this.state.email} </p>
        <p> phone is: {this.state.phone} </p>
        <form
          className="form-group form-inline needs-validation"
          onSubmit={this.handleSubmit}
        >
          <span className="label label-warning m-1">Name:</span>
          <input
            className="input-group-addon form-control m-2"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <span className="label label-warning m-1">Email:</span>
          <input
            className="input-group-addon form-control m-2"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <span className="label label-warning m-1">Phone:</span>
          <input
            className="form-control m-2"
            type="number"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />

          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
        <p className="text-justify"> {this.state.value} </p>
      </div>
    );
  }
} // End class

export default ContactInfo;
