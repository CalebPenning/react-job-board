import JoblyApi from './api'
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/routes';
import Navbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react'
import jwt from "jsonwebtoken"
import UserContext from './components/UserContext'

const App = () => {
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
    token ? getUser() : setCurrUser({username: "", firstName: ""})
  }, [token, currUser])

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
        <UserContext.Provider value={{ token, currUser, setToken, applyForJob }}>
          <Navbar />
          <Routes />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  )

}

export default App;
