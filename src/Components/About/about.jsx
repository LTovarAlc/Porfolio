import Formation from "../Formation/formation"
import Projects from "../Projects/projects"
import Skills from "../Skills/skills"
import "./about.css"
import React from "react"

const About = () => {
    return<section className="about" id="about">
        <Formation/>
        <Skills/>
        <Projects/>
    </section>
}

export default About