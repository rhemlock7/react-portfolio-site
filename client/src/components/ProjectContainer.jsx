
function ProjectContainer({ project }) {
    const { projectImage, altText, title, description, githubLink, deployedLink } = project;

    return (
        <div className="md:w-11/12 md:mt-3 my-6">
            <img className="w-full" src={projectImage} alt={altText} />
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="flex justify-between items-center">
                <a className="underline" href={githubLink} target="_blank" rel="noreferrer">Github Repo</a>
                <a className="underline" href={deployedLink} target="_blank" rel="noreferrer">Deployed Site</a>
            </div>
        </div>
    )
}

export default ProjectContainer
