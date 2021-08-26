import JoblyApi from "../../api"

const SearchForm = ({ category, setData }) => {
    const searchForData = async (category, setData) => {
        let searchTerm = document.getElementById('search').value
        if (category === 'jobs') {
            let res = await JoblyApi.getJobs(searchTerm)
            setData([...res])
        } else if (category === 'companies') {
            let res = await JoblyApi.getAllCompanies(searchTerm)
            setData([...res])
        }
    }

    const doSubmit = e => {
        e.preventDefault()
        searchForData(category, setData)
        document.getElementById('search').value = ""
    }

    return (
            <form className="input-group mb-3" onSubmit={doSubmit} >
            <input type="text" className="form-control" id="search" />
            <button className="btn btn-outline-primary"  >Search</button>
            </form>
    )
}

export default SearchForm