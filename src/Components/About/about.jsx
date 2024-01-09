import Formation from "../Formation/formation"
import Skills from "../Skills/skills"
import "./about.css"
import React from "react"

const About = () => {
    return<section className="about">
        <Formation/>
        <Skills/>
    </section>
}

export default About