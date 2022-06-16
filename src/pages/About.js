import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic_name}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Your Name</div>
            <div className="brief_description">
              Hey, My name is Ricardo Paz. I am a student at Michigan State University studying Computer Sciece
              with a minor in Cognitive Science. I am thrilled to be able to share this experience with y'all.

              Fun Fact: I belly-flopped off a waterfall.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
