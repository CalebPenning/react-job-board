import { useContext } from "react"
import UserContext from "../UserContext"

const Home = () => {
    const { currUser } = useContext(UserContext)
    if (currUser) return (
        <div className="pt-5">
        <div className="jumbotron text-center pt-5">
            <div className="container">
                <h1 className="jumbotron-header text-primary display-4">Jobly</h1>
                <p className="lead text-muted">The Internet's Favorite Job Board</p>
                <h2 className="display-6">Welcome back, {currUser.firstName}</h2>
            </div>
        </div>
        </div>
    )
}

export default Home