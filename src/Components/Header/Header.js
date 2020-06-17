import React from "react";
import "./Header.css";
import config from "../../static/config"

const Header = () => {
  const faSize = "fa-2x";
  
  return (
    <header id="home" className="cover">
      <div className="hero">
        <h1>
          <span className="key-words">Cloud Native</span> Personal Website
        </h1>
        <p>Developed by Chen Li</p>
      </div>
      <div className="links">
        {config.socialLinks.map((link) => {
          return (
            <a href={link.url} className="link" key={link.name}>
              <i className={[link.className, faSize].join(" ")}></i>
            </a>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
