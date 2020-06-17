import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    opacity: 0.0,
    sections: [
      {
        name: "home",
      },
      {
        name: "profile",
      },
    ],
  };

  AdjustNavbar = (e) => {
    let foundCurrent = false;

    let sectionList = this.state.sections.map((section) => {
      let offsetTop = document.getElementById(section.name).offsetTop;
      let offsetHeight = document.getElementById(section.name).offsetHeight;

      if (
        offsetTop < window.scrollY &&
        offsetTop + offsetHeight > window.scrollY + window.innerHeight
      ) {
        section.displayPercentage = 1
      } else if (
        offsetTop >= window.scrollY &&
        offsetTop <= window.scrollY + window.innerHeight
      ) {
        let end = offsetTop + offsetHeight;
        end =
          window.scrollY + window.innerHeight < end
            ? window.scrollY + window.innerHeight
            : end;
        section.displayPercentage = (end - offsetTop) / window.innerHeight;
      } else if (
        offsetTop + offsetHeight >= window.scrollY &&
        offsetTop + offsetHeight <= window.scrollY + window.innerHeight
      ) {
        section.displayPercentage =
          (offsetTop + offsetHeight - window.scrollY) / window.innerHeight;
      } else {
        section.displayPercentage = 0;
      }

      if (!foundCurrent && section.displayPercentage >= 0.5) {
        section.current = true;
        foundCurrent = true
      } else {
        section.current = false;
      }

      return section;
    });

    let opacity = this.state.opacity;

    if (window.scrollY < window.innerHeight) {
      opacity = (0.9 * window.scrollY) / window.innerHeight;
    } else {
      opacity = 0.9;
    }

    this.setState({
      opacity,
      sections: sectionList,
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.AdjustNavbar);
    window.addEventListener("resize", this.AdjustNavbar);
    window.addEventListener("load", this.AdjustNavbar);
  }

  render() {
    let tone = Math.round(256 * (this.state.opacity + 0.1));

    return (
      <div
        className="nav"
        style={{
          backgroundColor: `rgba(32, 32, 32, ${this.state.opacity})`,
        }}
      >
        <ul>
          {this.state.sections.map((section) => {
            return (
              <li key={section.name}>
                <a
                  href={"#" + section.name}
                  style={
                    section.current
                      ? { color: "var(--primary-color)" }
                      : {
                          color: `rgba(${tone}, ${tone}, ${tone}, 1)`,
                        }
                  }
                >
                  {section.name.toUpperCase()}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Navbar;
