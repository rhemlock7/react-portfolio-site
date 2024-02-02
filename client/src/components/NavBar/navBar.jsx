import { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../../assets/nav/Menu.png';
import xIcon from '../../assets/nav/X.png';
import './navBar.styles.css';


function NavBar() {
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <header className='dark-bg text-white'>
            <nav className='flex justify-between items-center py-5 max-width m-auto'>
                <div>
                    <Link to='/'><h3>Ryan Hemlock</h3></Link>
                </div>
                <div className='hidden md:block'>
                    <Link className='mr-3' to='/'>About</Link>
                    <Link className='mr-3' to='/projects'>Projects</Link>
                    <Link className='mr-3' to='/contact'>Contact</Link>
                    <a href="https://drive.google.com/file/d/1lH-s2z0zJBX8s2Pn7N_BtVPQ0qcJxETI/view" target='_blank' rel='noreferrer'><button className="button-cta">Resume</button></a>
                </div>

                <img className='w-7 md:hidden' src={isMenuClicked ? xIcon : menuIcon} onClick={updateMenu} />
            </nav>

            <div id='mobile-menu' className={isMenuClicked ? 'flex' : 'hidden'}>
                <Link to='/about'>About</Link>
                <Link className='mt-1' to='/projects'>Projects</Link>
                <Link className='mt-1' to='/contact'>Contact</Link>
                <button className="button-cta mt-2">Resume</button>
            </div>

            <style>

            </style>
        </header >
    )
}

export default NavBar;
