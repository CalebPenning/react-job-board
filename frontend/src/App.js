import JoblyApi from './api'
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/routes';
import Navbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react'
import jwt from "jsonwebtoken"
import UserContext from './components/UserContext'

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("userJWT") || null)
  const [hasUpdated, setHasUpdated] = useState(false)
  const [currUser, setCurrUser] = useState()

  
  useEffect(() => {
    const getUser = async () => {
      JoblyApi.token = token
      let res = await JoblyApi.getCurrentUser(jwt.decode(token).username)
      setCurrUser(res)
    }
    // LOGIN CASE: if token, getUser
    // UPDATE CASE: if hasUpdated = true, getUser and set it false
    
    if (token && !hasUpdated) {
      getUser()
    } else if (hasUpdated && token) {
      getUser()
      setHasUpdated(false)
    } else setCurrUser({})
    // token || hasUpdated ? getUser() : setCurrUser({username: "", firstName: ""})
  }, [token, hasUpdated]
  // Note: removed deps array, seems to make the username as intended.
  // Someday I'll know how to use useEffect correctly :(
    // Additional Note: it was just calling the API over and over again.
    // Trying to figure out how to handle this lol
  )

  useEffect(() => {
    if (token) {
      localStorage.setItem("userJWT", token)
    } else {
      localStorage.clear()
      JoblyApi.token = null
    }
  }, [token])

  const applyForJob = async id => {
    const jobId = await JoblyApi.applyToJob(currUser.username, id)
    if (currUser.applications) {
      setCurrUser(user => ({
        ...user,
        applications: [...user.applications, jobId]
      }))
    } else {
      setCurrUser(user => ({
        ...user,
        applications: [jobId]
      }))
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ token, currUser, setToken, applyForJob, setHasUpdated }}>
          <Navbar />
          <Routes />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  )

}

export default App;
