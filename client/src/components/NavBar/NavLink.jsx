import { Link } from 'react-router-dom'

function NavLink({ to, text, currentPath }) {
    const isActive = currentPath === to;
    return (
        <Link className={isActive ? 'underline text-lg mr-3' : 'mr-3'} to={to}>{text}</Link>
    );
}

export default NavLink;