import React from "react"
import HeaderBootstrap from "./header--bootstrap"
import Footer from "./footer"
import { Helmet } from "react-helmet"

import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "../styles/style.css"
import "../styles/match.css"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location?.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath}>
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-16WL9W89J0"
        ></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-16WL9W89J0');
          `}
        </script>
      </Helmet>
      <HeaderBootstrap></HeaderBootstrap>
      <main className="global-wrapper container">{children}</main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
