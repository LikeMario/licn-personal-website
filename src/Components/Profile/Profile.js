import React, { Component } from "react";
import "./Profile.css";

import Card from "./Card/Card";
import config from "../../static/config"

class Profile extends Component {
  render() {
    return (
      <section id="profile" className="profile container">
        <div className="self-introduction">
          <img
            src={require("../../assets/avatar.jpg")}
            alt=""
            className="avatar"
          />
          <div className="description">
            <h2>Hi there! </h2>
            <p>
              I am a software engineer. I am passionate about cloud and IoT
              solutions.
            </p>
            <p>Here are my public works.</p>
          </div>
        </div>
        <div className="work-container">
          {config.publicWorks.map((work) => {
            return (
              <Card
                image={require("../../assets/" + work.image)}
                data={work}
                key={work.title}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default Profile;
