//@ts-nocheck
import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/PICT_20210822_162731.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Vanessa Ferrand</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      <h4 className="profile-text">
        This project is created for my portfolio
      </h4>
      <div className="profile-links">
        {/* rel="noreferrer" indique au navigateur d'éviter de diffuser des informations de referrer source: https://developer.mozilla.org/fr/docs/Web/HTML/Attributes/rel/noreferrer*/}
        <a href="https://github.com/Vanessa-fe" target="_blank" rel="noreferrer">  
          <FaGithub />
        </a>
        <a href="https://twitter.com/VanessaCode3" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/vanessaferrand-developpeur/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);