import { useState } from "react";

import "./App.css";
//icons
import css_img from "./assets/skills/CSS3.png";
import html_img from "./assets/skills/HTML5.png";
import JS from "./assets/skills/JavaScript.png";
import React from "./assets/skills/React.png";
import tailwind from "./assets/skills/Tailwind_CSS.png";
import figma from "./assets/skills/Figma.png";
import ejsIcon from "./assets/skills/ejsIcon.png";
import nodeJs from "./assets/skills/nodeJsIcon.png";
import express from "./assets/skills/expressIcon.png";
import expressDark from "./assets/skills/expIconBlack.png";
import FlipCard from "./components/FlipCard";
import bookshopDiff from "./assets/projects/bookshop.png";
import herbrarium from "./assets/projects/herbrarium_diff.png";

//waves
//  dark
import waveSkillsTop from "./assets/waves/dark/waveSkillsTop.png";
import waveSkillsBottom from "./assets/waves/dark/waveSkillsBottom.png";
import waveAboutTop from "./assets/waves/dark/waveAboutTop.png";
import waveAboutBottom from "./assets/waves/dark/waveAboutBottom.png";
import waveProject from "./assets/waves/dark/waveProjects.png";
//  light
import wAboutTL from "./assets/waves/light/wAboutTL.png";
import wAboutBL from "./assets/waves/light/wAboutBL.png";
import wSkillsTL from "./assets/waves/light/wSkillsTL.png";
import wSkillsBL from "./assets/waves/light/wSkillsBL.png";
import wProjectsL from "./assets/waves/light/wProjectsL.png";
//let there be light
import isLight from "./assets/lightbulbLight.png";
import isDark from "./assets/lightbulbDark.png";
import darkBg from "./assets/bg_img_1a.png";
import lightBg from "./assets/bg_img_light.png";

//components
import ContactMe from "./components/ContactMe";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [light, setLight] = useState(false);

  return (
    <div className="main-container">
      <Navbar isLight={light} />
      <div className="img"></div>
      <img
        src={light ? isLight : isDark}
        className="let-be-light"
        onClick={() => {
          setLight((prev) => !prev);
          document.body.style.backgroundImage = `url(${
            light ? darkBg : lightBg
          })`;
        }}
        alt={
          light ? "a lit lightbulb icon" : "a white outline of a lit lightbulb"
        }
      />
      <section className="hello-section" id="home">
        <div className={`hello ${light && "light-font"}`}>
          <h1>Karolina Szerszeń</h1>
          <h2>Front-end developer </h2>
        </div>
      </section>
      <section className="about-section" id="about">
        <img src={light ? wAboutTL : waveAboutTop} />
        <div className={`about ${light && "light"}`}>
          <h2>About me</h2>
          <p>
            Hello! I’m Karolina Szerszeń, a 20 year old junior front-end
            developer with a passion for creating clean and interactive
            websites. I enjoy working with HTML, CSS, and JavaScript, and I’m
            currently diving deeper into React and responsive web design. I've
            also worked with Node.js and Express I love transforming creative
            ideas into reality. I’m constantly learning new technologies and
            best practices to improve my skills.
          </p>
        </div>
        <img src={light ? wAboutBL : waveAboutBottom} />
      </section>
      <section className="skill-section" id="skills">
        <img src={light ? wSkillsTL : waveSkillsTop} className="skills-wave" />
        <div className={`skills ${light && "light"}`}>
          <h2>Technology stack</h2>
          <h3 className="second-text">Front-end</h3>
          <div className="flip-card-container second">
            <FlipCard img={html_img} alt="HTML icon" name="HTML" />
            <FlipCard img={JS} alt="JavaScript icon" name="JavaScript" />
            <FlipCard img={React} alt="React icon" name="React" />
          </div>
          <h3>Styling & UI</h3>
          <div className="flip-card-container ">
            <FlipCard img={css_img} alt="CSS icon" name="CSS" />
            <FlipCard img={tailwind} alt="tailwind icon" name="Tailwind CSS" />
            <FlipCard img={figma} alt="Figma icon" name="Figma" />
          </div>
          <h3 className="second-text">Backend</h3>
          <div className="flip-card-container second">
            <FlipCard img={ejsIcon} alt="EJS icon" name="EJS" />
            <FlipCard img={nodeJs} alt="Node.js icon" name="Node.js" />
            <FlipCard
              img={light ? expressDark : express}
              alt="Express icon"
              name="Express"
            />
          </div>
        </div>
        <img
          src={light ? wSkillsBL : waveSkillsBottom}
          className="skills-wave"
        />
      </section>

      <section className="projects-section" id="projects">
        <img src={light ? wProjectsL : waveProject} className="project-wave" />
        <div className={`projects-wrapper ${light && "light"}`}>
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
            isLight={light}
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
            isLight={light}
          />
        </div>
      </section>
      <section className={`contact-section ${light && "light"}`} id="contact">
        <ContactMe />
      </section>
      <Footer isLight={light} />
    </div>
  );
}

export default App;
