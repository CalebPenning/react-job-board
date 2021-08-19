import { Route, Switch, Redirect } from "react-router-dom"

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
                <UserForm type="login" />
            </Route>
            <Route exact path="/signup">
                <UserForm type="signup" />
            </Route>
        </Switch>
    </>
)

export default Routes