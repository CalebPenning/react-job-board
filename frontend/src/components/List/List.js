import './List.css'
import JoblyApi from '../../api'
import UserContext from '../UserContext'
import Card from '../Card/Card'
import { useContext, useEffect, useState } from 'react'

const List = ({ category }) => {
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [doSearch, setDoSearch] = useState(false)
    const { token } = useContext(UserContext)

    useEffect(() => {
        async function getData(category) {
            if (category === 'companies') {
                let companyList = await JoblyApi.getAllCompanies()
                setData(companyList)
            } else if (category === 'jobs') {
                let jobList = await JoblyApi.getJobs()
                setData(jobList)
            }
        }
        getData(category)
    }, [category])

    useEffect(() => {
        async function searchData() {
            if (category === 'companies' && doSearch) {
                let searchRes = await JoblyApi.getAllCompanies(searchTerm)
                setData(searchRes)
            } else if (category === 'jobs' && doSearch) {
                let searchRes = await JoblyApi.getJobs(searchTerm)
                setData(searchRes)
            }
        }
        if (doSearch) searchData()
    }, [doSearch])

    const updateSearch = e => {
        setSearchTerm(e.target.value)
    }

    const search = e => {
        e.preventDefault()
        setDoSearch(true)
    }
    return (
        // <div>
        // // code below works to display data
        // // replace with reusable card components


        category === 'companies' ? (
        <div className="album py-5">
            <div className="container">
                {data.map((el, i) => (
                    <Card key={i} data={el} category={category} />
                ))}
            </div>
        </div>) 
        : (
        <div className="album py-5">
            <div className="container">
            {data.map((el, i) => (
                <Card key={el.id} data={el} category={category} />
            ))}
            </div>
        </div>)
        // Placeholder</div>
    )
}

export default List