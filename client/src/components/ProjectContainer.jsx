
function ProjectContainer({projectImage, altText, title, description}) {
    return (
        <div className="md:w-1/2">
            <img className="w-full" src={projectImage} alt={altText} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ProjectContainer
