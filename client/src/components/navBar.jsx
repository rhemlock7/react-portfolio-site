import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <header className='dark-bg text-white'>
            <nav className='flex justify-between items-center py-5 max-width m-auto'>
                <div>
                    <Link to='/'><h3>Ryan Hemlock</h3></Link>
                </div>
                <div>
                    <Link className='mr-3' to='/about'>About</Link>
                    <Link className='mr-3' to='/projects'>Projects</Link>
                    <Link className='mr-3' to='/contact'>Contact</Link>
                    <button className="button-cta">Resume</button>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;
