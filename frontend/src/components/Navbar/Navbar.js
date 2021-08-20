import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../UserContext'
import { logoutUser } from '../../utils'
import jwt from "jsonwebtoken"

const Navbar = () => {
    const { setToken } = useContext(UserContext)
    const token = localStorage.getItem('userJWT')
    let currUser
    if (token) currUser = jwt.decode(token).username
    if (currUser) {
        return (
        <nav className="navbar navbar-expand-md">
                    <NavLink exact to="/" className="navbar-brand">
                        Jobly
                    </NavLink>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-4">
                    <NavLink exact to="/companies">
                        Companies
                    </NavLink>
                </li>
                <li className="nav-item mr-4">
                    <NavLink exact to="/jobs">
                        Jobs
                    </NavLink>
                </li>
                <li className="nav-item mr-4">
                    <NavLink exact to="/profile" >
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={() => {logoutUser(setToken)}} to="/logout" >Logout</NavLink>
                </li>
            </ul>
        </nav>
    )} else {
        return (
            <nav className="navbar">
                <NavLink exact to="/" className="navbar-brand">
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