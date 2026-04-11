import { NavLink, Link } from 'react-router-dom'
import userIcon from '../assets/avatar-icon.png'
export default function Header() {
    function classHandler(e) {
        return e.isActive ? "active-link" : null
    }
    return (
      <header>
        <NavLink className="site-logo" to="/">#VanLife</NavLink>
        <nav>
            <NavLink className={(e) => classHandler(e)} to="host">Host</NavLink>
            <NavLink className={(e) => classHandler(e)} to="about">About</NavLink>
            <NavLink className={(e) => classHandler(e)} to="vans">Vans</NavLink>
             <Link to="login" className="login-link">
                    <img 
                        src={userIcon}
                        alt="Login Icon" 
                        className="login-icon"
                    />
              </Link>
        </nav>
      </header>
    )
}