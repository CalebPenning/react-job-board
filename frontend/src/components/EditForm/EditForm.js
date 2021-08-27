import './EditForm.css'
import { useContext, useState } from "react"
import UserContext from "../UserContext"
import JoblyApi from "../../api"
import { useHistory } from 'react-router-dom'

const EditForm = () => {
    const { currUser, setHasUpdated } = useContext(UserContext)
    const history = useHistory()
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "" })

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        console.log("Form Data: ", formData)
        let res = await JoblyApi.editProfile(currUser.username, formData)
        console.log(res)
        if (res.user) {
            setHasUpdated(true)
            history.push('/')
        }
    }

    return (
    <div className="pt-5">
        <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
        <div className="card text-center">
            <h1 className="card-title mt-3">{currUser.username}'s Profile:</h1>
            <form onSubmit={handleSubmit} >
                <div className="card-body">
                <div className="form-group">
                    <label>Username</label>
                    <p className="form-control-plaintext">{currUser.username}</p>
                </div>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" 
                    className="form-control" 
                    defaultValue={currUser.firstName} 
                    onChange={handleChange}
                    name="firstName"
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" 
                    className="form-control" 
                    defaultValue={currUser.lastName} 
                    onChange={handleChange}
                    name="lastName"
                    />
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" 
                    className="form-control" 
                    defaultValue={currUser.email} 
                    onChange={handleChange}
                    name="email"
                    />
                </div>
                <button className="btn btn-primary mt-3">Submit Changes</button>
                </div>
            </form>
        </div>
        </div>
    </div>
    )
}

export default EditForm