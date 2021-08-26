import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from "../Card/Card"
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
            <div className="container">
            <h3>{company.name}</h3>
            <h4>{company.description}</h4>
                {company.jobs.map((el, i) => (
                    <Card key={i} data={el} category="jobs" />
                ))}
            </div>
        )
        : (
            <h1>Loading...</h1>
        )
    )
}

export default Details