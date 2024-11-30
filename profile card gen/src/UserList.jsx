import React from "react";
import PropTypes from "prop-types";
import ProfileCard from "./ProfileCard";
import "./UserList.css";

const UserList = ({ users }) => (
  <div className="user-list">
    {users.length === 0 ? (
      <p>No profiles to display.</p>
    ) : (
      users.map((user, index) => <ProfileCard key={index} {...user} />)
    )}
  </div>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserList;
