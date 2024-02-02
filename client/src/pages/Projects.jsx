import ProjectContainer from "../components/ProjectContainer"
import avengersProject from '../assets/avengers-project2.jpg';

function Projects() {
    return (
        <section>
            <h1>Projects</h1>
            <div className="mt-3 grid grid-cols-2">
                <ProjectContainer 
                    projectImage={avengersProject} 
                    altText='Avengers project example image'
                    title = 'Avengers Project'
                    description = 'Avengers workout tracker made with Tyler and Mustapha'
                />
                <ProjectContainer 
                    projectImage='' 
                    altText='CRM Dashboard project'
                    title = 'CRM Studio Dashboard'
                    description = 'CRM Studio Dashboard made with Hudson and Brendan'
                />
                <ProjectContainer 
                    projectImage='' 
                    altText='New Project'
                    title = 'Project 3'
                    description = 'Super cool project 3'
                />
            </div>
        </section>
    )
}

export default Projects
