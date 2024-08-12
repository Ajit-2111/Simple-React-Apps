import React from "react";

export default function Footer() {
  return (
    <div>
      <ul className="social-list">
        <li onClick={() => `${window.open("https://github.com/Ajit-2111")}`}>
          <i className="fa fa-github"></i>
        </li>
        <li
          onClick={() =>
            `${window.open("https://www.linkedin.com/in/ajitchoudhary/")}`
          }
        >
          <i className="fa fa-linkedin"></i>
        </li>
        <li onClick={() => (window.location = "mailto:ajitcc55@gmail.com")}>
          <i className="fa fa-google"></i>
        </li>
      </ul>

      {/* <div className="buttons">
        <button className="btn btn-outline-primary px-4">Message</button>
        <button className="btn btn-primary px-4 ms-3">Contact</button>
      </div> */}
    </div>
  );
}
