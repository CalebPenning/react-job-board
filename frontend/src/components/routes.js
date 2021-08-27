import { Route, Switch, Redirect } from "react-router-dom"
import List from "./List/List"
import Home from "./Home/Home"
import Details from "./Details/Details"
import UserForm from "./UserForm/UserForm"
import { useContext } from "react"
import UserContext from "./UserContext"
import NotFound from "./NotFound/NotFound"
import EditForm from "./EditForm/EditForm"


const Routes = () => {
    const { token } = useContext(UserContext)
    return (
        <>
            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
                <Route exact path="/companies">
                    { token ? <List category="companies" /> : <Redirect to="/login" /> }
                </Route>
                <Route path="/companies/:handle" >
                    { token ? <Details /> : <Redirect to="/login" />}
                </Route>
                <Route exact path="/jobs">
                    { token ? <List category="jobs" /> : <Redirect to="/login" /> }
                </Route>
                <Route exact path="/profile">
                    { token ? <EditForm /> : <Redirect to="/login" /> }
                </Route>
                <Route exact path="/login">
                    <UserForm formType="login" />
                </Route>
                <Route exact path="/signup">
                    <UserForm formType="signup" />
                </Route>
                <Route exact path="/logout">
                    <Redirect to='/' />
                </Route>
                <Route path="/*">
                    <NotFound />
                </Route>
            </Switch>
        </>
    )
}

export default Routes