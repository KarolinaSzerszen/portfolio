import { useState } from "react";

import "./App.css";
import css_img from "./assets/CSS3.png";
import html_img from "./assets/HTML5.png";
import JS from "./assets/JavaScript.png";
import React from "./assets/React.png";
import tailwind from "./assets/Tailwind_CSS.png";
import figma from "./assets/Figma.png";
import FlipCard from "./components/FlipCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="img"></div>

      <section>
        <div className="hello">
          <h1>Karolina Szerszeń</h1>
          <h2>Front-end developer </h2>
        </div>
        <div className="about">
          <div class="wave-top">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#101010"
                fill-opacity="1"
                d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,181.3C672,171,768,181,864,208C960,235,1056,277,1152,266.7C1248,256,1344,192,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <h2>About me</h2>
          <p>
            Hello! I’m Karolina Szerszeń, a junior front-end developer with a
            passion for creating clean and interactive websites. I enjoy working
            with HTML, CSS, and JavaScript, and I’m currently diving deeper into
            React and responsive web design. I love transforming creative ideas
            into reality. I’m constantly learning new technologies and best
            practices to improve my skills.
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#101010"
              fill-opacity="1"
              d="M0,320L48,282.7C96,245,192,171,288,122.7C384,75,480,53,576,53.3C672,53,768,75,864,90.7C960,107,1056,117,1152,101.3C1248,85,1344,43,1392,21.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="skills">
          <div class="half-circle"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="skills-top-wave"
          >
            <path
              fill="#101010"
              fill-opacity="1"
              d="M0,192L48,165.3C96,139,192,85,288,90.7C384,96,480,160,576,192C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>

          <h2>Skills</h2>
          <div>
            <h3>Front-end</h3>
            <div className="flip-card-container">
              <FlipCard img={css_img} alt="CSS icon" name="CSS" />
              <FlipCard img={html_img} alt="HTML icon" name="HTML" />
              <FlipCard img={JS} alt="JavaScript icon" name="JavaScript" />
              <FlipCard img={React} alt="React icon" name="React" />
            </div>

            <h3>Styling & UI</h3>
            <div className="flip-card-container">
              <FlipCard img={css_img} alt="CSS icon" name="CSS" />
              <FlipCard
                img={tailwind}
                alt="tailwind icon"
                name="Tailwind CSS"
              />
              <FlipCard img={figma} alt="Figma icon" name="Figma" />
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="skills-bottom-wave"
          >
            <path
              fill="#101010"
              fill-opacity="1"
              d="M0,160L48,165.3C96,171,192,181,288,192C384,203,480,213,576,218.7C672,224,768,224,864,197.3C960,171,1056,117,1152,85.3C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="my-projects">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="my-projects-top-wave"
          >
            <path
              fill="#101010"
              fill-opacity="1"
              d="M0,96L48,80C96,64,192,32,288,42.7C384,53,480,107,576,149.3C672,192,768,224,864,234.7C960,245,1056,235,1152,218.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <h2>My projects</h2>
          <div>Latest</div>
          <div>First</div>
        </div>
      </section>
    </div>
  );
}

export default App;
