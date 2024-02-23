import { Link } from 'react-router-dom'
import './NavBar.scss'
import Logo from '../../assets/images/logo.png'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <Link className='logo-link'>
                    <img src={Logo} alt="Logo" />
                    <span>Find Job</span>
                </Link>
            </div>

            <ul className="menu">
                <li className="nav-menu">
                    <Link to='/' className='menu-links'>
                        Home
                    </Link>
                </li>
                <li className="nav-menu">
                    <Link to='/' className='menu-links'>
                        About
                    </Link>
                </li>
                <li className="nav-menu">
                    <Link to='/' className='menu-links'>
                        Jobs
                    </Link>
                </li>
                <li className="nav-menu">
                    <Link to='/' className='menu-links'>
                        Companies
                    </Link>
                </li>
                <li className="nav-menu">
                    <Link to='/' className='menu-links'>
                        Contact
                    </Link>
                </li>
            </ul>

            <button className="sign-in">
                SIGN IN
            </button>
        </div>
    )
}

export default NavBar
