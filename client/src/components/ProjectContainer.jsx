
function ProjectContainer({ project }) {
    const { projectImage, altText, title, description } = project;

    return (
        <div className="w-11/12 mt-3">
            <img className="w-full" src={projectImage} alt={altText} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ProjectContainer
