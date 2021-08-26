import './List.css'
import JoblyApi from '../../api'
import Card from '../Card/Card'
import SearchForm from '../SearchForm/SearchForm'
import { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'

/**
 *  Reuseable List component
 *  takes a single prop 'category' to differentiate between a Job List and a Company List
 *  our piece of state, data, is passed down to the card component, as well as category
 *  to generate the Card components.
 *  Our state-updating function is passed down to our SearchForm component,
 *  so that when a search term is submitted, the data updates to reflect that
 */

const List = ({ category }) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getData(category) {
            if (category === 'companies') {
                let companyList = await JoblyApi.getAllCompanies()
                setData(companyList)
                setIsLoading(false)
            } else if (category === 'jobs') {
                let jobList = await JoblyApi.getJobs()
                setData(jobList)
                setIsLoading(false)
            }
        }
        getData(category)
    }, [category])

    if (isLoading) return (
        <Loading />
    )

    if (!data.length) return (
        <div className="album py-5">
            <div className="container" >
                <SearchForm category={category} setData={setData} />
                <h3>No Results Found.</h3>
            </div>
        </div>
    )

    return (
        category === 'companies' ? (
        <div className="album py-5">
            <div className="container">
            <SearchForm category={category} setData={setData} />
                {data.map((el, i) => (
                    <Card key={i} data={el} category={category} />
                ))}
            </div>
        </div>) 
        : (
        <div className="album py-5">
            <div className="container">
            <SearchForm category={category} setData={setData} />
            {data.map((el, i) => (
                <Card key={el.id} data={el} category={category} />
            ))}
            </div>
        </div>)
    )
}

export default List