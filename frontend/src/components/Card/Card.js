import { NavLink } from "react-router-dom"
import UserContext from "../UserContext"
import { useContext } from "react"

const Card = ({ data, category }) => {
    const { token, currUser, applyForJob } = useContext(UserContext)
    const getRandLogo = () => {
        let rand = Math.ceil(Math.random() * 3)
        return `../static/logo${rand}.jpg`
    }

    const hasApplied =
        !currUser || !currUser.applications
            ? false
            : currUser.applications.includes(data.id)
    if (category === "companies") return (
        <div className="col-md-12">
            <NavLink to={`/companies/${data.handle}`} style={{ color: "black", textDecoration: "none" }} data={data}>
                <div className="card text-left reuse-card" style={{width: "100%"}}>
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        {/* <img className="float-right" src={getRandLogo()} alt="Random generic company logo. Used for mockup." /> */}
                        <p className="card-text">{data.description}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )

    else return (
        <div className="col-md-12" >
            <div className="card text-left reuse-card" style={{width: "100%"}}>
                <div className="card-body">
                    <h5 className="card-title">
                        {data.title}
                    </h5>
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