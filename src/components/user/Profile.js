//

import React, { useState } from "react";
import { navigate } from "@reach/router";
import "./Profile.scss";
import avatar1 from "./../../imgs/avatars/001-burglar.svg";
import avatar2 from "./../../imgs/avatars/002-woman.svg";
import avatar3 from "./../../imgs/avatars/003-superhero.svg";
import avatar4 from "./../../imgs/avatars/004-robot.svg";
import avatar5 from "./../../imgs/avatars/005-dragon.svg";
import avatar6 from "./../../imgs/avatars/006-cyborg.svg";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

const Profile = ({ name: initialName, avatar, registerUser }) => {
  const [name, setName] = useState(initialName);
  const [selectedAvatar, setAvatar] = useState(avatar ? avatar : avatar1);
  const [validityChecked, setValidityChecked] = useState(false);

  const register = event => {
    event.preventDefault();
    setValidityChecked(true);

    if (event.target.checkValidity()) {
      registerUser(name, selectedAvatar);
      navigate("/habits");
    }
  };

  return (
    <form
      className={`mobile-size-container ${
        validityChecked ? "was-validated" : ""
      }`}
      onSubmit={register}
      noValidate
    >
      <h2>Super hero who?</h2>
      <div className="mb-3">
        <label htmlFor="profile-name">Name:</label>
        <input
          id="profile-name"
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        ></input>
        <div className="invalid-feedback">
          What an honor! The invisible habit geek among us?
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="profile-avatar">Avatar:</label>
        <div className="input-group profile__avatar-container">
          {avatars.map((avatar, index) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
            <img
              key={`avatar-${index}`}
              onClick={() => setAvatar(avatar)}
              src={avatar}
              alt="Avatar, not really important. Don't worry!"
              className={`profile__avatar ${
                avatar === selectedAvatar ? "profile__avatar--selected" : ""
              }`}
            ></img>
          ))}
        </div>
      </div>
      <hr className="mb-4" />
      <button type="submit" className="btn btn-primary btn-lg btn-block">
        Done!
      </button>
    </form>
  );
};

export default Profile;
