import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../../utils'

const Navbar = ({ currentUser }) => {
    if (currentUser) {
        return (
        <nav>
            <NavLink exact to="/" className="logo">
                Jobly
            </NavLink>
            <NavLink exact to="/companies">
                Companies
            </NavLink>
            <NavLink exact to="/jobs">
                Jobs
            </NavLink>
            <NavLink exact to={`/users/${currentUser}`}>
                Profile
            </NavLink>
            <NavLink onClick={logoutUser}>Logout</NavLink>
        </nav>
    )} else {
        return (
            <nav>
                <NavLink exact to="/" className="logo">
                    Jobly
                </NavLink>
                <NavLink exact to="/signup">
                    Sign Up
                </NavLink>
                <NavLink exact to="/login">
                    Login
                </NavLink>
            </nav>
        )
    }
}

export default Navbar