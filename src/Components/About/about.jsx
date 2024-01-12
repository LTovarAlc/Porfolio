import Formation from "../Formation/formation"
import Projects from "../Projects/projects"
import Skills from "../Skills/skills"
import "./about.css"
import React from "react"
import 'animate.css'
import Contact from "../Contact/contact"

const About = () => {
    return<section className="about animate__animated animate__slideInRight animate__delay-3s" id="about">
        <Formation/>
        <Skills/>
        <Projects/>
        <Contact/>
    </section>
}

export default About