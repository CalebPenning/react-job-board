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
        <div className="container-fluid sticky-top bg-light" >
        <nav className="navbar navbar-expand-md">
                    <NavLink exact to="/" className="navbar-brand">
                        Jobly
                    </NavLink>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-auto">
                    <NavLink className="nav-link" exact to="/companies">
                        Companies
                    </NavLink>
                </li>
                <li className="nav-item mr-auto">
                    <NavLink className="nav-link" exact to="/jobs">
                        Jobs
                    </NavLink>
                </li>
                <li className="nav-item mr-auto">
                    <NavLink className="nav-link" exact to="/profile" >
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" onClick={() => {logoutUser(setToken)}} to="/logout" >Logout</NavLink>
                </li>
            </ul>
        </nav>
        </div>
    )} 
    
    else return (
            <div className="container-fluid sticky-top bg-light">
                <nav className="navbar navbar-expand-md">
                    <NavLink exact to="/" className="navbar-brand">
                        Jobly
                    </NavLink>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-auto">    
                            <NavLink className="nav-link" exact to="/signup">
                                Sign Up
                            </NavLink>
                        </li>
                        <li className="nav-item mr-auto">
                            <NavLink className="nav-link" exact to="/login">
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
}


export default Navbar