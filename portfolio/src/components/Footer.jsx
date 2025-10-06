import resumePL from "../assets/resume/SzerszenKarolina_PL.pdf";
import resumeENG from "../assets/resume/SzerszenKarolina_ENG.pdf";
import { useState } from "react";
import Credits from "./Credits";

function Footer(props) {
  const [click, setClick] = useState(false);

  return (
    <div>
      {click && <Credits isLight={props.isLight} />}
      <div className={`footer ${props.isLight && "light"}`}>
        <div className={`resume ${props.isLight && "light"}`}>
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
