import React, { Component } from "react";

class AddContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "type Title",
      body: "type Body",
      youtube: "YouTubeLink@dfdfdfdfdf",
      photoUpload: "photo Link",
      Address: "Multi field from anothe component"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  } // End constructor

  handleChange(event) {
    console.log(event.target.value, "::event target value::");
    console.log(this.props, "::props output::");

    if (event.target.name === "title") {
      this.setState({ title: event.target.value });
      console.log(event.target.name, "check teh values of event.target.name");
    }
    if (event.target.name === "body") {
      this.setState({ body: event.target.value });
    }

    if (event.target.name === "youtube") {
      this.setState({ youtube: event.target.value });
    }
    if (event.target.name === "photoUpload") {
      this.setState({ photoUpload: event.target.value });
    }
  } // End handleChange Method

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  } // End handlesubmit Method
  render() {
    return (
      <span>
        <h3> Add content Page #######</h3>
        <p> Title is: {this.state.title} </p>
        <p> body is: {this.state.body} </p>
        <p> Youtube is: {this.state.youtube} </p>
        <p> PhotoUpload is: {this.state.photoUpload} </p>
        <form
          className="form-group form-inline needs-validation"
          onSubmit={this.handleSubmit}
        >
          <span className="label label-warning m-1">Title:</span>
          <input
            className="input-group-addon form-control m-2"
            type="text"
            name="Title"
            value={this.state.Title}
            onChange={this.handleChange}
          />
          <span className="label label-warning m-1">Body:</span>
          <input
            className="input-group-addon form-control m-2"
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <span className="label label-warning m-1">Youtube:</span>
          <input
            className="form-control m-2"
            type="link"
            name="youtube"
            value={this.state.youtube}
            onChange={this.handleChange}
          />
          <label class="btn btn-light" for="my-file-selector">
            <input
              type="file"
              ref={this.fileInput}
              autoComplete="off"
              name="photoUpload"
              onChange={this.handleChange}
            />
          </label>

          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
        <p> {this.state.value} </p>
      </span>
    );
  }
}

export default AddContent;
