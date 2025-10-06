import { useState } from "react";

import "./App.css";
import css_img from "./assets/CSS3.png";
import html_img from "./assets/HTML5.png";
import JS from "./assets/JavaScript.png";
import React from "./assets/React.png";
import tailwind from "./assets/Tailwind_CSS.png";
import figma from "./assets/Figma.png";
import FlipCard from "./components/FlipCard";
import bookshop from "./assets/bookshopImg.png";
import bookshopDiff from "./assets/bookshop.png";
import herbrarium from "./assets/herbrarium_diff.png";
import Project from "./components/Project";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      <div className="img"></div>

      <section className="hello-section">
        <div className="hello">
          <h1>Karolina Szerszeń</h1>
          <h2>Front-end developer </h2>
        </div>
      </section>
      <section className="about-section">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          class="wave-top"
        >
          <path
            fill="#1d1c1cff"
            fill-opacity="1"
            d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,181.3C672,171,768,181,864,208C960,235,1056,277,1152,266.7C1248,256,1344,192,1392,160L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        <div className="about">
          <h2>About me</h2>
          <p>
            Hello! I’m Karolina Szerszeń, a junior front-end developer with a
            passion for creating clean and interactive websites. I enjoy working
            with HTML, CSS, and JavaScript, and I’m currently diving deeper into
            React and responsive web design. I love transforming creative ideas
            into reality. I’m constantly learning new technologies and best
            practices to improve my skills.
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1d1c1cff"
            fill-opacity="1"
            d="M0,320L48,282.7C96,245,192,171,288,122.7C384,75,480,53,576,53.3C672,53,768,75,864,90.7C960,107,1056,117,1152,101.3C1248,85,1344,43,1392,21.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </section>
      <section class="skill-section">
        <div class="half-circle"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="skills-wave"
        >
          <path
            fill="#1d1c1cff"
            fill-opacity="1"
            d="M0,192L48,165.3C96,139,192,85,288,90.7C384,96,480,160,576,192C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="skills">
          <h2>Skills</h2>
          <h3>Front-end</h3>
          <div className="flip-card-container">
            <FlipCard img={css_img} alt="CSS icon" name="CSS" />
            <FlipCard img={html_img} alt="HTML icon" name="HTML" />
            <FlipCard img={JS} alt="JavaScript icon" name="JavaScript" />
            <FlipCard img={React} alt="React icon" name="React" />
          </div>
          <h3 className="second-text">Styling & UI</h3>
          <div className="flip-card-container second">
            <FlipCard img={css_img} alt="CSS icon" name="CSS" />
            <FlipCard img={tailwind} alt="tailwind icon" name="Tailwind CSS" />
            <FlipCard img={figma} alt="Figma icon" name="Figma" />
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="skills-wave"
        >
          <path
            fill="#1d1c1cff"
            fill-opacity="1"
            d="M0,96L48,96C96,96,192,96,288,85.3C384,75,480,53,576,69.3C672,85,768,139,864,165.3C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            //d="M0,160L48,165.3C96,171,192,181,288,192C384,203,480,213,576,218.7C672,224,768,224,864,197.3C960,171,1056,117,1152,85.3C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </section>
      <div className="additional-space"></div>
      <section className="projects-section">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="my-projects-top-wave"
        >
          <path
            fill="#1d1c1cff"
            fill-opacity="1"
            d="M0,160L60,165.3C120,171,240,181,360,165.3C480,149,600,107,720,112C840,117,960,171,1080,186.7C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            //d="M0,256L60,250.7C120,245,240,235,360,197.3C480,160,600,96,720,90.7C840,85,960,139,1080,154.7C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            //d="M0,192L48,202.7C96,213,192,235,288,224C384,213,480,171,576,128C672,85,768,43,864,69.3C960,96,1056,192,1152,234.7C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            //d="M0,64L48,53.3C96,43,192,21,288,16C384,11,480,21,576,48C672,75,768,117,864,144C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            //d="M0,96L48,80C96,64,192,32,288,42.7C384,53,480,107,576,149.3C672,192,768,224,864,234.7C960,245,1056,235,1152,218.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="projects-wrapper">
          <h2>My projects</h2>
          <Project
            img={bookshopDiff}
            name="Bookshop"
            desc="A React based online bookshop showing new, popular, and ganre specific books, with book details, author related suggestions, a shopping cart, and a search by title."
            url="https://book-shop-delta-five.vercel.app/"
            stack="React & Tailwind"
            fullDesc="This website is built using React, Vite, Tailwind CSS, and ESlint. It fetches books from an API to display new releases, popular titles and books filtered by ganre. Users are able to view detailed book information, explore other works by the same author, and see similar books recommended by the API. The shop features a shopping cart where users can add books, adjust quatities, and see a running total. A live search allows users to find books by title, with debounced API requests and interactive dropdown results. The interface is responsive, and interactive, providing a smooth and user-friendly experience."
            features="Displays new and popular books, Filters books by genre,Implements skeleton loading state to boost user experience while loading books, Shows detailed information for each book, Sugests books by the same author, Suggests similar books, Lets users add books to a shopping cart, Allows changing quatities in the cart, Calculates the total price in te cart, Provides live search by book title, Hides search results when clicking outside, Responsive and interactive UI with React and Tailwind"
            githubUrl="https://github.com/KarolinaSzerszen/book-shop"
          />
          <div className="project-dropdown"></div>
          <Project
            img={herbrarium}
            name="Herbrarium"
            desc="Herbrarium is a plant-focused website where users can browse  edible and non-edible plants using data from a plant API, read plant related news, create their own articles as well as leave comments to discuss articles and exchange knowledge."
            url="https://herbrarium.vercel.app/"
            stack="Node.js, Express.js and EJS (Embedded Javascrpit)"
            fullDesc="Herbrarium is an website built using Node,js, Express.js and EJS for server-side rendering. It features a plant based database accesed via API displaying images and information for both edible and non-edible plants. The site includes a news feed with plant related articles, as well as a user generated article system with image uploads and a commenting feature, fostering community engagement. The design emphasizes a natural aesthetic with greens, and cream tones, and is fully responsive across devices. Express.js handles routing and server logic, dynamically passing API and user content to EJS templates for seamless rendering."
            features="Plant Database (via API) with posibility to browse plants by category, A blog like feed where users can read plant related news and articles, Users can publish their own plant related articles, Visitors can leave comments below every article, The site is fully responside for all type of devices"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
