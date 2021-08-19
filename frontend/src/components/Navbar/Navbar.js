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
            <NavLink exact to={`/users/${currUser}`} >
                Profile
            </NavLink>
            <NavLink onClick={() => {logoutUser(setToken)}} to="/logout" >Logout</NavLink>
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