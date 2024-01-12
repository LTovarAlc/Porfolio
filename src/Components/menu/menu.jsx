import "./menu.css"
import React from "react"

const Menu = ({scrollToSection}) => {

  const handleClick = (id, event) => {
    event.preventDefault();
    scrollToSection(id);
  };

    return<ul class="nav">
    <li><a href="#formation" onClick={(e) => handleClick("formation", e)}>Formation</a></li>
    <li><a href="#skills" onClick={(e) => handleClick("skills", e)}>Skills</a></li>
    <li><a href="#projects" onClick={(e) => handleClick("projects", e)}>Projects</a></li>
    <li><a href="#contact" onClick={(e) => handleClick("contact", e)}>Contact</a></li>
  </ul>
}

export default Menu
