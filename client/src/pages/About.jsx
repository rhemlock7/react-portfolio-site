import ryanHeadshot from '../assets/ryan-hemlock-website.jpg';

function About() {
    return (
        <section>
            <div className="flex justify-between items-center mb-5">
                <h1>About Me</h1>
                <img src={ryanHeadshot} width='90px' className='rounded-lg' alt="Headshot image of Ryan Hemlock" />
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ea. Laboriosam, ex? Iure accusantium nobis voluptatem consectetur, saepe minus, quo ratione incidunt doloribus autem velit exercitationem! Consequuntur deleniti dolores qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ea. Laboriosam, ex? Iure accusantium nobis voluptatem consectetur, saepe minus, quo ratione incidunt doloribus autem velit exercitationem! Consequuntur deleniti dolores qui?</p>
                <p className="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ea. Laboriosam, ex? Iure accusantium nobis voluptatem consectetur, saepe minus, quo ratione incidunt doloribus autem velit exercitationem! Consequuntur deleniti dolores qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ea. Laboriosam, ex? Iure accusantium nobis voluptatem consectetur, saepe minus, quo ratione incidunt doloribus autem velit exercitationem! Consequuntur deleniti dolores qui?</p>
                <p className="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, ea. Laboriosam, ex? Iure accusantium nobis voluptatem consectetur, saepe minus, quo ratione incidunt doloribus autem velit exercitationem!</p>
            </div>
            <div>
                <button className="button-cta mt-5">Contact</button>
            </div>
        </section>
    )
}

export default About
