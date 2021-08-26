import { NavLink } from "react-router-dom"
import UserContext from "../UserContext"
import { useContext } from "react"
import urls from "../static/urls"
import "./Card.css"

const Card = ({ data, category }) => {
    const { currUser, applyForJob } = useContext(UserContext)
    const getRandLogo = (arr) => {
        let rand = Math.ceil(Math.random() * arr.length - 1)
        return arr[rand]
    }

    const hasApplied =
        !currUser || !currUser.applications
            ? false
            : currUser.applications.includes(data.id)
    if (category === "companies") return (
        <div className="col-md-12 text-center">
            <NavLink to={`/companies/${data.handle}`} style={{ color: "black", textDecoration: "none" }} data={data}>
                <div className="card text-left reuse-card" style={{width: "100%"}}>
                    <div className="card-body">
                        <h4 className="card-title text-dark display-6">{data.name}</h4>
                        <img className="company-logo" src={getRandLogo(urls)} alt="Random generic company logo. Used for mockup." />
                        <p className="card-text">{data.description}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )

    else return (
        <div className="col-md-12" >
            <div className="card text-center reuse-card" style={{width: "100%"}}>
                <div className="card-body">
                    <h4 className="card-title text-dark">
                        <b>{data.title}</b>
                    </h4>
                    <NavLink to={`/companies/${data.companyHandle}`} style={{color: "black", textDecoration: "none"}}><p>{data.companyName}</p></NavLink>
                    <p>Salary: {data.salary}</p>
                    <p>Equity: {data.equity}</p>
                    {!hasApplied && (
                        <button className="btn btn-danger" onClick={() => applyForJob(data.id)} >Apply</button>
                    )}
                    {hasApplied && (
                    <button className="btn btn-danger" disabled>Applied</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card