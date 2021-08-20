import JoblyApi from "../../api"

const SearchForm = ({ category }) => {
    return (
        <form>
            <input type="text" id="search" />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm