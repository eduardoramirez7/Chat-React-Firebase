import { Route, Router, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRouter() {

        return this.state.loading === true ? <h2>Loading...</h2> : (
            <h1></h1>
         /*  <Router>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <PrivateRoute path="/chat" authenticated={this.state.authenticated} component={Chat}></PrivateRoute>
              <PublicRoute path="/signup" authenticated={this.state.authenticated} component={Signup}></PublicRoute>
              <PublicRoute path="/login" authenticated={this.state.authenticated} component={Login}></PublicRoute>
            </Switch>
          </Router> */
        );
}
