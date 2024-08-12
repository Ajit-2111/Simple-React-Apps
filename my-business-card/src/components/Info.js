import React from "react";
import profilePic from "../ajit choudhary.png";

import "../App.css";
export default function Info() {
  return (
    <div className="text-center">
      <img
        src={profilePic}
        width="100"
        alt="profile pic"
        className="rounded-circle"
      />
      <div className="mt-4">
        <span className="bg-secondary p-1 px-4 rounded text-white">Pro</span>
        <h5 className="mt-2 mb-0">Ajit Choudhary</h5>
        <span>Software Engineer</span>
      </div>
    </div>
  );
}
