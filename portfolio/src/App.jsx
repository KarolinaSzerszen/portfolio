import { useState } from "react";

import "./App.css";
import css_img from "./assets/skills/CSS3.png";
import html_img from "./assets/skills/HTML5.png";
import JS from "./assets/skills/JavaScript.png";
import React from "./assets/skills/React.png";
import tailwind from "./assets/skills/Tailwind_CSS.png";
import figma from "./assets/skills/Figma.png";
import FlipCard from "./components/FlipCard";

import bookshopDiff from "./assets/projects/bookshop.png";
import herbrarium from "./assets/projects/herbrarium_diff.png";
import Project from "./components/Project";
import waveSkillsTop from "./assets/waves/waveSkillsTop.png";
import waveSkillsBottom from "./assets/waves/waveSkillsBottom.png";
import waveAboutTop from "./assets/waves/waveAboutTop.png";
import waveAboutBottom from "./assets/waves/waveAboutBottom.png";
import waveProject from "./assets/waves/waveProjects.png";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="main-container">
      <div className="img"></div>

      <section className="hello-section" id="home">
        <div className="hello">
          <h1>Karolina Szerszeń</h1>
          <h2>Front-end developer </h2>
        </div>
      </section>
      <section className="about-section" id="about">
        <img src={waveAboutTop} />
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
        <img src={waveAboutBottom} />
      </section>
      <section className="skill-section" id="skills">
        <img src={waveSkillsTop} className="skills-wave" />
        <div className="skills">
          <h2>Technology stack</h2>
          <h3 className="second-text">Front-end</h3>
          <div className="flip-card-container second">
            <FlipCard img={css_img} alt="CSS icon" name="CSS" />
            <FlipCard img={html_img} alt="HTML icon" name="HTML" />
            <FlipCard img={JS} alt="JavaScript icon" name="JavaScript" />
            <FlipCard img={React} alt="React icon" name="React" />
          </div>
          <h3>Styling & UI</h3>
          <div className="flip-card-container ">
            <FlipCard img={tailwind} alt="tailwind icon" name="Tailwind CSS" />
            <FlipCard img={figma} alt="Figma icon" name="Figma" />
          </div>
        </div>
        <img src={waveSkillsBottom} className="skills-wave" />
      </section>

      <section className="projects-section" id="projects">
        <img src={waveProject} className="project-wave" />
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
            githubUrl="https://github.com/KarolinaSzerszen/Herbrarium"
          />
        </div>
      </section>
      <section className="contact-section" id="contact">
        <ContactMe />
      </section>
    </div>
  );
}

export default App;
