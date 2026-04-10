import { NavLink } from 'react-router-dom'
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
        </nav>
      </header>
    )
}