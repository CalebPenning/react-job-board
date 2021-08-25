import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import JoblyApi from "../../api"

const Details = () => {
    const { handle } = useParams()
    const [company, setCompany] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    if (company.jobs) console.log(company.jobs)
    useEffect(() => {
        const getCompany = async handle => {
            let res = await JoblyApi.getCompany(handle)
            setCompany(res)
            setIsLoading(false)
        }
        getCompany(handle)
    }, [handle])
    return (
        !isLoading ? (
            <div>
            <h3>{company.name}</h3>
            <h4>{company.description}</h4>
                {company.jobs.map(el => (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{el.title}</h5>
                            <p className="card-text">Salary: {el.salary}</p>
                            <p className="card-text">Equity: {el.equity}</p>
                            <button className="btn btn-primary btn-danger float-right">Apply</button>
                        </div>    
                    </div>
                ))}
            </div>
        )
        : (
            <h1>Loading...</h1>
        )
    )
}

export default Details