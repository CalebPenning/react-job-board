import './List.css'
import JoblyApi from '../../api'
import Card from '../Card/Card'
import SearchForm from '../SearchForm/SearchForm'
import { useEffect, useState } from 'react'

const List = ({ category }) => {
    const [data, setData] = useState([])
    // const [searchTerm, setSearchTerm] = useState("")
    // const [doSearch, setDoSearch] = useState(false)
    // const { token } = useContext(UserContext)

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

    return (
        // <div>
        // // code below works to display data
        // // replace with reusable card components


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
            {data.map((el, i) => (
                <Card key={el.id} data={el} category={category} />
            ))}
            </div>
        </div>)
        // Placeholder</div>
    )
}

export default List