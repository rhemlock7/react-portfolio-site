import ProjectContainer from "../components/ProjectContainer"
import avengersProject from '../assets/avengers-project2.jpg';
import CRMmockup from '../assets/CRM-project-mockup.jpg';

const projectObj = [
    {
        projectImage: avengersProject,
        altText: 'Avengers project example image',
        title: 'Avengers Project',
        description: 'Avengers workout tracker made with Tyler and Mustapha',
        githubLink: '',
        deployedLink: '',
    },
    {
        projectImage: CRMmockup,
        altText: 'CRM Dashboard project',
        title: 'CRM Studio Dashboard',
        description: 'CRM Studio Dashboard made with Hudson and Brendan'
    },
    {
        projectImage:'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText:'MVC-Tech-Blog',
        title:'MVC-Tech-Blog',
        description:'Tech blog where you can signup, create blogs, and leave comments on other users\' blogs.',
        githubLink: '',
        deployedLink: '',
    },
    {
        projectImage:'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText:'README Generator',
        title:'README Generator',
        description:'A command-line application that automates the process of creating a README file for your projects',
        githubLink: '',
        deployedLink: '',
    },
    {
        projectImage:'https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText:'SVG Logo Maker',
        title:'SVG Logo Maker',
        description:'An SVG logo generator designed to help you create a logo for your business without having to hire expensive graphic designers.',
        githubLink: '',
        deployedLink: '',
    },
    {
        projectImage:'https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText:'Weather App',
        title:'Weather App',
        description:'A weather app designed to help people view the current weather data from any city.',
        githubLink: '',
        deployedLink: '',
    }

]

function Projects() {
    return (
        <section>
            <h1>Portfolio</h1>
            <div className="mt-3 md:grid md:grid-cols-2">
                {projectObj.map((project, index) => (
                    <ProjectContainer key={index} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects
