import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <>
            <nav className='flex justify-between dark-bg text-white p-5'>
                <div>
                    <h3>Ryan Hemlock</h3>
                </div>
                <div>
                    <Link className='mr-3' to='/'>Home</Link>
                    <Link className='mr-3' to='/about'>About</Link>
                    <Link className='mr-3' to='/projects'>Projects</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar;
