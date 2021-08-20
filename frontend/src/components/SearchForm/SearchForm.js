import { useEffect } from "react"
import JoblyApi from "../../api"

const SearchForm = ({ category, setData }) => {
    useEffect(() => {
        
    })
    return (
        <form>
            <input type="text" id="search" />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm