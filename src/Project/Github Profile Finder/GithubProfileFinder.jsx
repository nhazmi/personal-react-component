//https://api.github.com/users/username .... <- this is the format of API to be fetched

import { useState } from "react";
import { useEffect } from "react";
import "./GithubProfileFinder.css";

export default function GithubProfileFinder() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("Nabil");
  const [profilePicture, setProfilePicture] = useState(null);

  async function fetchApi() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setProfilePicture(data.avatar_url);
    } catch (error) {
      console.log(error.message);
    }
  }

  // function handleButtonSubmit() {
  //   setUsername(name);   
  //   fetchApi();
  //   setUsername("");
  // }

  useEffect(function () {
    username ? fetchApi() : null, [username];
  });
  return (
    <div className="mainContainer">
      {profilePicture ? (
        <img
          src={profilePicture}
          alt={`Profile Picture ${username}`}
          style={{ borderRadius: "20px", height: "100px", width: "100px", transitionDuration:"1s" }}
        />
      ) : null}
      <p>Name: {username}</p>
      <input
        type="text"
        value={name}
        onChange={function (event) {
          return setName(event.target.value);
        }}
      />
      <button
        onClick={function () {
          setUsername(name);
          fetchApi();
        }}
      >
        Find
      </button>
    </div>
  );
}
