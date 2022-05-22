import React from "react"
import { Router } from "@reach/router"
import Profile from "../components/login/profile"
import Login from "../components/login/login"
import PrivateRoute from "../components/privateRoute"
import Layout from "../components/layout"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)
export default App
