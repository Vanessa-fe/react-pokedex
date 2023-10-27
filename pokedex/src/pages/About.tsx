import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/PICT_20210822_162731.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img
      className="profile-image"
        src={avatarImage}
        alt="avatar" />
      <h1 className="profile-text"> Hi I am Vanessa</h1>
      <h2 className="profile-text">The creator of this pokedex</h2>
      <h4 className="profile-text">This project is create for my portfolio</h4>
      <div className="profile-links">
        <a href="https://github.com/Vanessa-fe">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/vanessaferrand-developpeur/">
          <FaLinkedin />
        </a>
        <a href="https://welovedevs.com/app/fr/developer/vanessa-developpeur-web-php-wordpress-js">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
