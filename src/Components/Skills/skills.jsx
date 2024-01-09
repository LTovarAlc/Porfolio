import "./skills.css"

const Skills = () => {
    return<section className="skills" id="skills">
        <div className="skills__container">
        <h1 className="section__title">Skills</h1>
        <div className="skills__card-container">
            <div className="skill__card">
                <img src="../../img/js.png" alt="Skill Icon" className="skill__Icon"/>
                <span>JavaScript</span>
            </div>
            <div className="skill__card">
                <img src="../../img/html.png" alt="Skill Icon" className="skill__Icon"/>
                <span>HTML</span>
            </div>
            <div className="skill__card">
                <img src="../../img/css.png" alt="Skill Icon" className="skill__Icon"/>
                <span>CSS</span>
            </div>
            <div className="skill__card">
                <img src="../../img/react.png" alt="Skill Icon" className="skill__Icon"/>
                <span>React</span>
            </div>
            <div className="skill__card">
                <img src="../../img/tailwind.png" alt="Skill Icon" className="skill__Icon"/>
                <span>Tailwind CSS</span>
            </div>
            <div className="skill__card">
                <img src="../../img/bootstrap.png" alt="Skill Icon" className="skill__Icon"/>
                <span>BootStrap</span>
            </div>
            <div className="skill__card">
                <img src="../../img/json.png" alt="Skill Icon" className="skill__Icon"/>
                <span>Json</span>
            </div>
            <div className="skill__card">
                <img src="../../img/figma.png" alt="Skill Icon" className="skill__Icon"/>
                <span>Figma</span>
            </div>
        </div>
        </div>
        <div className="softSkills__container">
            <h1 className="section__title">Soft Skills</h1>
            <div className="skills__card-container">
            <div className="skill__card">
                <span>Team Work</span>
            </div>
            <div className="skill__card">
                <span>English B2</span>
            </div>
            <div className="skill__card">
                <span>Adaptability</span>
            </div>
            <div className="skill__card">
                <span>Time Management</span>
            </div>
            <div className="skill__card">
                <span>Empathy</span>
            </div>
            <div className="skill__card">
                <span>Communication</span>
            </div>
            <div className="skill__card">
                <span>Problem Solving</span>
            </div>
            <div className="skill__card">
                <span>Creativity</span>
            </div>
            <div className="skill__card">
                <span>Critical Thinking</span>
            </div>
            <div className="skill__card">
                <span className="content">Multidisciplinary Collaboration</span>
            </div>
            </div>
        </div>
    </section>
}

export default Skills