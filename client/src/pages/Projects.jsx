import ProjectContainer from "../components/ProjectContainer"
import avengersProject from '../assets/avengers-project2.jpg';

function Projects() {
    return (
        <section>
            <h1>Projects</h1>
            <div className="mt-3">
                <ProjectContainer 
                    projectImage={avengersProject} 
                    altText='Avengers project example image'
                    title = 'Avengers Project'
                    description = 'Avengers workout tracker made with Tyler and Mustapha'
                />
            </div>
        </section>
    )
}

export default Projects
