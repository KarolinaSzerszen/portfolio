import React, { useState } from "react";
import github from "../assets/github.png";
import connection from "../assets/link.png";
import linkWhite from "../assets/linkWhite.png";

function Project({
  img,
  name,
  desc,
  url,
  stack,
  fullDesc,
  features,
  githubUrl,
  isLight,
}) {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick((prev) => !prev);
  }

  function createCommaList(text) {
    if (!text) return null;
    const items = text
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="whole-project">
      <div className="project">
        <div className="project-img">
          <img src={img} />
          <div className="project-link">
            <a className="link" href={url} target="_blank">
              See project
            </a>
          </div>
        </div>
        <div className={`project-content ${isLight && "light-font"}`}>
          <h3>{name}</h3>
          <p>{desc}</p>
          <div>
            <button className="description-button" onClick={handleClick}>
              {click ? "Show less" : "Read more"}
            </button>

            <a href={githubUrl} target="_blank">
              <img src={github} alt="github icon" />
            </a>
            <a href={url} target="_blank">
              <img src={isLight ? connection : linkWhite} alt="web link" />
            </a>
          </div>
        </div>
      </div>
      {click && (
        <div className={`project-dropdown ${isLight && "light-font"}`}>
          <h3>Technology Stack</h3>
          <p>{stack}</p>
          <h3>Description</h3>
          <p>{fullDesc}</p>
          <h3>Features</h3>
          {createCommaList(features)}
        </div>
      )}
    </div>
  );
}

export default Project;
