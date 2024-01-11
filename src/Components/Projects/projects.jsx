import "./projects.css"

const Projects = () => {
    return<section className="projects" id="projects">
        <h1 className="section__title">Projects</h1>
        <div className="projects__container">
            <div className="cardProject">
                <a href="https://gshop-taupe.vercel.app/" className="project__name" target="_blank">Gshop
                <img src="../../img/redireccionar.png" alt="" className="redi" />
                </a>
                <a href="https://gshop-taupe.vercel.app/" className="link" target="_blank"><img src="../../img/gshop.png" alt="Gshop" className="project__img"/></a>
                <span className="project__descrip">Video game-themed e-commerce</span>
            </div>
            <div className="cardProject">
                <a href="https://alura-flix-ltovaralc.vercel.app/" className="project__name" target="_blank">AluraFlix
                <img src="../../img/redireccionar.png" alt="" className="redi" />
                </a>
                <a href="https://alura-flix-ltovaralc.vercel.app/" className="link" target="_blank"><img src="../../img/aluraflix.png" alt="AluraFlix" className="project__img"/></a>
                <span className="project__descrip">Video player using YouTube's API</span>
            </div>
        </div>
    </section>
}

export default Projects