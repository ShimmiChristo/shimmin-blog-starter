import React from "react"
import { Router } from "@reach/router"
import Profile from "../components/login/profile"
import Login from "../components/login/login"
import PrivateRoute from "../components/privateRoute"
import Layout from "../components/layout"

const LoginPage = () => (
  <Layout>
    <h1>Login Page</h1>
    <Router>
      <PrivateRoute path="/profile" component={Profile} />
      <Login path="/login" />
    </Router>
  </Layout>
)
export default LoginPage
