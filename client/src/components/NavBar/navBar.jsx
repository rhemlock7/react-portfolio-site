import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import menuIcon from '../../assets/nav/Menu.png';
import xIcon from '../../assets/nav/X.png';
import NavLink from './NavLink';
import './navBar.styles.css';


function NavBar() {
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const location = useLocation();

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
                    <NavLink to='/' text="About" currentPath={location.pathname} />
                    <NavLink to='/projects' text="Projects" currentPath={location.pathname} />
                    <NavLink to='/contact' text="Contact" currentPath={location.pathname} />
                    <Link to='/resume'><button className="button-cta">Resume</button></Link>
                </div>

                <img className='w-7 md:hidden' src={isMenuClicked ? xIcon : menuIcon} onClick={updateMenu} />
            </nav>

            <div id='mobile-menu' className={isMenuClicked ? 'flex' : 'hidden'}>
                <NavLink to='/' text="About" currentPath={location.pathname} />
                <NavLink to='/projects' text="Projects" currentPath={location.pathname} />
                <NavLink to='/contact' text="Contact" currentPath={location.pathname} />
                <Link to='/resume'><button className="button-cta">Resume</button></Link>
            </div>
        </header >
    )
}

export default NavBar;
