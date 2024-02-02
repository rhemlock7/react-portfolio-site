import ryanHeadshot from '../assets/ryan-hemlock-website.jpg';

function About() {
    return (
        <section>
            <div className="flex flex-col-reverse md:flex-row justify-between md:items-center md:mb-5">
                <h1 className='my-2 md:my-0'>About Me</h1>
                <img src={ryanHeadshot} className='rounded-lg md:w-24 w-36' alt="Headshot image of Ryan Hemlock" />
            </div>
            <div>
                <p>My name is Ryan Hemlock and I am a web developer based out Atglen, PA. I am a full stack developer that works with the MERN stack. React, Express, Node, and MongoDB. I love SAAS companies & startups and would love to be a part of a company like that.</p>
                <p className='mt-4'>Click the button below to get in touch with me.</p>
            </div>
            <div>
                <button className="button-cta mt-5">Contact</button>
            </div>
        </section>
    )
}

export default About
