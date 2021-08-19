import { Route, Switch, Redirect } from "react-router-dom"
import List from "./List/List"
import Home from "./Home/Home"
import Details from "./Details/Details"
import UserForm from "./UserForm/UserForm"

const Routes = () => (
    <>
        <Switch>
            <Route exact path="/" >
                <Home />
            </Route>
            <Route exact path="/companies">
                <List category="companies" />
            </Route>
            <Route path="/companies/:handle" >
                <Details />
            </Route>
            <Route exact path="/jobs">
                <List category="jobs" />
            </Route>
            <Route exact path="/login">
                <UserForm formType="login" />
            </Route>
            <Route exact path="/signup">
                <UserForm formType="signup" />
            </Route>
        </Switch>
    </>
)

export default Routes