import ProjectContainer from "../components/ProjectContainer"
import avengersProject from '../assets/avengers-project2.jpg';
import CRMmockup from '../assets/CRM-project-mockup.jpg';

const projectObj = [
    {
        projectImage: avengersProject,
        altText: 'Avengers project example image',
        title: 'Avengers Project',
        description: 'Avengers workout tracker made with Tyler and Mustapha',
        githubLink: 'https://github.com/rhemlock7/avenger-initiative',
        deployedLink: 'https://rhemlock7.github.io/avenger-initiative/',
    },
    {
        projectImage: CRMmockup,
        altText: 'CRM Dashboard project',
        title: 'CRM Studio Dashboard',
        description: 'CRM Studio Dashboard made with Hudson and Brendan',
        githubLink: 'https://github.com/rhemlock7/CRM-Dashboard',
        deployedLink: 'https://crm-dashboard-dab4d4caa095.herokuapp.com/login',
    },
    {
        projectImage:'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText:'MVC-Tech-Blog',
        title:'MVC-Tech-Blog',
        description:'Tech blog where you can signup, create blogs, and leave comments on other users\' blogs.',
        githubLink: 'https://github.com/rhemlock7/MVC-tech-blog',
        deployedLink: 'https://mvc-sql-blog-24bc3bd0a7b6.herokuapp.com/',
    },
    {
        projectImage:'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText:'README Generator',
        title:'README Generator',
        description:'A command-line application that automates the process of creating a README file for your projects',
        githubLink: 'https://github.com/rhemlock7/readme-generator',
        deployedLink: 'https://www.loom.com/share/7127587e03704a13ad8484e9e2dcf39e?sid=58e916ae-ea64-4f75-ac63-09a48f955542',
    },
    {
        projectImage:'https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText:'SVG Logo Maker',
        title:'SVG Logo Maker',
        description:'An SVG logo generator designed to help you create a logo for your business without having to hire expensive graphic designers.',
        githubLink: 'https://github.com/rhemlock7/svg-logo-maker',
        deployedLink: 'https://www.loom.com/share/90406e3ce4c341858a34c53b50979d65?sid=66195b95-87de-4abd-bc12-a3985453c3fb',
    },
    {
        projectImage:'https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        altText:'Weather App',
        title:'Weather App',
        description:'A weather app designed to help people view the current weather data from any city.',
        githubLink: 'https://github.com/rhemlock7/weather-app-api',
        deployedLink: 'https://rhemlock7.github.io/weather-app-api/',
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
