import resumePL from "../assets/resume/SzerszenKarolina_PL.pdf";
import resumeENG from "../assets/resume/SzerszenKarolina_ENG.pdf";

function Footer() {
  return (
    <div className="footer">
      <div className="resume">
        <a href={resumePL} download>
          Resume-PL
        </a>
        <a href={resumeENG} download>
          Resume-ENG
        </a>
      </div>
      <span>Copyright © 2025 Karolina Szerszeń </span>
    </div>
  );
}

export default Footer;
