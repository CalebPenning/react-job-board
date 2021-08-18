import JoblyApi from './api'
import './App.css';
import { useState } from 'react'

function App() {

  const initialState = {
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: ""
  }

  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState([])

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
    let result = await JoblyApi.register(formData)
    if (result.success) {
      setFormData(initialState)
      console.log(result)
    }
    else setErrors(result)
  }

  return (
    <div className="App">
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
  );
}

export default App;
