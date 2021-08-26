import './UserForm.css'
import UserContext from '../UserContext'
import { useContext } from 'react'
import JoblyApi from '../../api'
import { useState } from "react"
import { Redirect } from 'react-router-dom'

const UserForm = ({ formType }) => {
    const { token, setToken } = useContext(UserContext)
    let initialState
    if (formType === "login") {
        initialState = {
            username: "",
            password: ""
        }
    } else {
        initialState = {
            username: "",
            password: "",
            email: "",
            firstName: "",
            lastName: ""
        }
    }
    
    const [formData, setFormData] = useState(initialState)
    const [errors, setErrors] = useState([])
    if (token) {
      return <Redirect to="/"/>
    }
    
    const handleChange = e => {
        try {
          const { name, value } = e.target
    
          setFormData(data => ({
            ...data,
            [name]: value
          }))
        }
    
        catch(err) {
          console.log(err)
        }
    }
    
    const handleSubmit = async e => {
        e.preventDefault()
        let result
        if (formType === 'signup') {
          result = await JoblyApi.register(formData)
        } else {
          result = await JoblyApi.login(formData)
        }
        if (result.success && localStorage.length === 0) {
          setFormData(initialState)
          setToken(result.token)
        }
        else setErrors(result)
    }

    if (formType === 'signup') {
      return (
          <div className="Form">
            <form onSubmit={handleSubmit} >
              <label htmlFor="username">Username</label>
              <input type="text" 
              name="username" id="username" 
              onChange={handleChange} />
              <label htmlFor="password">Password</label>
              <input type="password" 
              name="password" id="password" 
              onChange={handleChange} />
              <label htmlFor="firstName">First Name</label>
              <input type="text" 
              name="firstName" id="firstName" 
              onChange={handleChange} />
              <label htmlFor="lastName">Last Name</label>
              <input type="text" 
              name="lastName" id="lastName" 
              onChange={handleChange} />
              <label htmlFor="email">Email Address</label>
              <input type="email" 
              name="email" id="email" 
              onChange={handleChange} />
              <button type="submit">submit</button>
            </form>
            {errors.length ? <p>{errors}</p> : null}
          </div>
      ) 
  } else {
    return (
      <div className="Form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={handleChange} />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }  
}

export default UserForm