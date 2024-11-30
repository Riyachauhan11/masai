import React, { Component } from "react";
import PropTypes from "prop-types";
import "./UserInputForm.css";

class UserInputForm extends Component {
  state = {
    name: "",
    age: "",
    location: "",
    bio: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, location, bio } = this.state;
    this.props.onAddUser({ name, age: parseInt(age), location, bio });
    this.setState({ name: "", age: "", location: "", bio: "" });
  };

  render() {
    const { name, age, location, bio } = this.state;
    return (
      <form className="user-input-form" onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Name"
          required
        />
        <input
          name="age"
          value={age}
          onChange={this.handleChange}
          placeholder="Age"
          type="number"
          required
        />
        <input
          name="location"
          value={location}
          onChange={this.handleChange}
          placeholder="Location"
          required
        />
        <textarea
          name="bio"
          value={bio}
          onChange={this.handleChange}
          placeholder="Bio"
          required
        />
        <button type="submit">Add Profile</button>
      </form>
    );
  }
}

UserInputForm.propTypes = {
  onAddUser: PropTypes.func.isRequired,
};

export default UserInputForm;
