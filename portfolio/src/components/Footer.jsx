import resumePL from "../assets/resume/SzerszenKarolina_PL.pdf";
import resumeENG from "../assets/resume/SzerszenKarolina_ENG.pdf";
import { useState } from "react";
import Credits from "./Credits";

function Footer() {
  const [click, setClick] = useState(false);

  return (
    <div>
      {click && <Credits />}
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
        <span onClick={() => setClick((prev) => !prev)} className="credits">
          Credits
        </span>
      </div>
    </div>
  );
}

export default Footer;
