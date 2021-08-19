import JoblyApi from './api'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/routes';
import Navbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react'
import jwt from "jsonwebtoken"
import UserContext from './components/UserContext'

const App = () => {
  const initialState = {
    username: "",
    firstName: ""
  }
  const [token, setToken] = useState(localStorage.getItem("userJWT") || null)
  const [currUser, setCurrUser] = useState()
  // keep track of user here
  // use either state or context to do so
  // context would be better as it can be passed around and updated in child components
  
  useEffect(() => {
    const getUser = async () => {
      JoblyApi.token = token
      let res = await JoblyApi.getCurrentUser(jwt.decode(token).username)
      setCurrUser(res)
    }
    token ? getUser() : setCurrUser(initialState)
  }, [token])

  useEffect(() => {
    if (token) {
      localStorage.setItem("userJWT", token)
    } else {
      localStorage.clear()
      JoblyApi.token = null
    }
  }, [token])

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ token, currUser, setToken }}>
          <Navbar />
          <Routes />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  )

}

export default App;
